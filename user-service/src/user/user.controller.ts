import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import {
  CreateUserRequest,
  GetUserRequest,
  UserResponse,
} from '../../../proto/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  async getUser(data: GetUserRequest): Promise<UserResponse | undefined> {
    return this.userService.getUser(data);
  }

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(data: CreateUserRequest): Promise<UserResponse | undefined> {
    return this.userService.createUser(data);
  }
}
