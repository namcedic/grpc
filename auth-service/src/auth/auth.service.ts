import {Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {DecodedUserResponseDto} from "../../generated/auth";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async verifyJwt(token: string): Promise<DecodedUserResponseDto | null> {
        try {
            return this.jwtService.verify<DecodedUserResponseDto>(token);
        } catch {
            return null;
        }
    }
}
