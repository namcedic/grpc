import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

@Injectable()
export class GrpcMetadataInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('test ----------------------------------- test')
        const metadata = new Metadata();
        const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTcyMTUyNzIyN30.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        metadata.set('authorization', `Bearer ${jwtToken}`);

        // const grpcContext = context.switchToRpc();
        // const call = grpcContext.getContext();
        //
        // call.metadata = metadata;

        const grpcContext = context.switchToRpc().getContext();
        grpcContext.metadata = metadata;

        return next.handle();
    }
}