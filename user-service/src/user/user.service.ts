import { Injectable } from '@nestjs/common';
import { UserResponse } from '../../generated/user';

@Injectable()
export class UserService {
    private readonly users: UserResponse[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    getUser(id: number): UserResponse {
        const user = this.users.find((u) => u.id === id);
        return user || { id: 0, name: '', email: '' };
    }
}