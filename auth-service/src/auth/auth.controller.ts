import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import {ValidateTokenRequestDto, ValidateTokenResponseDto} from "../../generated/auth";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @GrpcMethod('AuthService', 'ValidateUserToken')
    async validateUserToken(data: ValidateTokenRequestDto): Promise<ValidateTokenResponseDto> {
        const decoded = await this.authService.verifyJwt(data.token);
        console.log(data,decoded)

        if (!decoded) {
            return {};
        }

        return {
            user: decoded
        }
    }
}