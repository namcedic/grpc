import {BadRequestException, Inject, Injectable} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';
import {USER_SERVICE_NAME, UserRequest, UserResponse, UserServiceClient} from "../../generated/user";
import {USER_SERVICE} from "../../../common/constant";

@Injectable()
export class UserService {
    private userService: UserServiceClient;

    constructor(@Inject(USER_SERVICE) private userClient: ClientGrpc) {
        this.userService = this.userClient.getService<UserServiceClient>(USER_SERVICE_NAME);
    }

    async getUser(data: UserRequest): Promise<UserResponse> {
        try {
            return await firstValueFrom(this.userService.getUser({ id: Number(data.id) }));
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }

    }
}