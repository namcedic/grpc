import {Controller, Get, Param, Inject, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import {UserResponse} from "../../generated/user";
import {JwtAuthGuard} from "../../../libs/guards/auth.guard";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserResponse> {
        return this.userService.getUser({ id: parseInt(id) });
    }
}