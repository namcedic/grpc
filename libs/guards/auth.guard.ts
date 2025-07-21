import {CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {ClientGrpc} from "@nestjs/microservices";
import {AUTH_SERVICE} from "../../common/constant";
import {firstValueFrom} from "rxjs";
import {AUTH_SERVICE_NAME, AuthServiceClient} from "../../auth-service/generated/auth";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    private authService: AuthServiceClient
    constructor(@Inject(AUTH_SERVICE) private authClient: ClientGrpc) {
        this.authService = this.authClient.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
    }
    async canActivate(ctx: ExecutionContext): Promise<boolean> {
        const request = ctx.switchToHttp().getRequest();

        const authHeader = request.headers['authorization'];
        console.log(authHeader, 'authorization');

        if (!authHeader || typeof authHeader !== 'string') {
            throw new UnauthorizedException('Missing Authorization header');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('Invalid Authorization header format');
        }

        const res = await firstValueFrom(this.authService.validateUserToken({ token }));
        console.log(res, token)

        if (!res.user) {
            throw new UnauthorizedException('Unauthorized');
        }

        request.user = res.user;
        console.log(request.user)
        return true;
    }
}
