import { Controller, Get, Param, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import {UserResponse} from "../../generated/user";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUser(@Param('id') id: string): Observable<UserResponse> {
        return this.userService.getUser({ id: parseInt(id) });
    }
}