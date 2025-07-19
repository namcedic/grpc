import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UserRequest, UserResponse } from '../../generated/user';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @GrpcMethod('UserService', 'GetUser')
    getUser(data: UserRequest): UserResponse {
        return this.userService.getUser(data.id);
    }
}