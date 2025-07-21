import { Observable } from "rxjs";
export declare const protobufPackage = "user";
export interface UserRequest {
    id: number;
}
export interface UserResponse {
    id: number;
    name: string;
    email: string;
}
export declare const USER_PACKAGE_NAME = "user";
export interface UserServiceClient {
    getUser(request: UserRequest): Observable<UserResponse>;
}
export interface UserServiceController {
    getUser(request: UserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
