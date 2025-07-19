import {BadRequestException, Injectable} from '@nestjs/common';
import { UserResponse } from '../../generated/user';
import {BOOK_SERVICE} from "../../../common/constant";

@Injectable()
export class UserService {
    private readonly users: UserResponse[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    getUser(id: number): UserResponse {
        const user = this.users.find((u) => u.id === id);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        console.log(BOOK_SERVICE)
        return user;
    }
}