import { Observable } from "rxjs";
export declare const protobufPackage = "auth";
export interface ValidateTokenRequestDto {
    token: string;
}
export interface DecodedUserResponseDto {
    userId: string;
    email: string;
}
export interface ValidateTokenResponseDto {
    user?: DecodedUserResponseDto | undefined;
    empty?: Empty | undefined;
}
export interface Empty {
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    validateUserToken(request: ValidateTokenRequestDto): Observable<ValidateTokenResponseDto>;
}
export interface AuthServiceController {
    validateUserToken(request: ValidateTokenRequestDto): Promise<ValidateTokenResponseDto> | Observable<ValidateTokenResponseDto> | ValidateTokenResponseDto;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
