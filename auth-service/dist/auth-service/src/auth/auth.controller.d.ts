import { AuthService } from './auth.service';
import { ValidateTokenRequestDto, ValidateTokenResponseDto } from "../../generated/auth";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    validateUserToken(data: ValidateTokenRequestDto): Promise<ValidateTokenResponseDto>;
}
