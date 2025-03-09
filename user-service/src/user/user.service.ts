import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import {
  CreateUserRequest,
  GetUserRequest,
  UserResponse,
} from '../../../proto/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async getUser(data: GetUserRequest): Promise<UserResponse | undefined> {
    const user = await this.userRepo.findOne({ where: { id: data.id } });
    return {
      data: user ? user : undefined,
    };
  }

  async createUser(data: CreateUserRequest): Promise<UserResponse | undefined> {
    const user = this.userRepo.create({ name: data.name });
    await this.userRepo.save(user);
    return {
      data: user ? user : undefined,
    };
  }
}
