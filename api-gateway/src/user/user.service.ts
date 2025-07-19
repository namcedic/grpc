import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {USER_SERVICE_NAME, UserRequest, UserResponse, UserServiceClient} from "../../generated/user";

@Injectable()
export class UserService {
    private userService: UserServiceClient;

    constructor(@Inject('USER_SERVICE') private userClient: ClientGrpc) {
        this.userService = this.userClient.getService<UserServiceClient>(USER_SERVICE_NAME);
    }

    getUser(data: UserRequest): Observable<UserResponse> {
        return this.userService.getUser(data);
    }
}