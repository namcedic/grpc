import { JwtService } from "@nestjs/jwt";
import { DecodedUserResponseDto } from "../../generated/auth";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    verifyJwt(token: string): Promise<DecodedUserResponseDto | null>;
}
