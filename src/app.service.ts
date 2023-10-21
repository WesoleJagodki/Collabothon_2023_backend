import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Users } from './users/users.entity';
import {
  CreateUsersResponse,
  GetUsersDto,
  CreateUsersDto,
  UpdateUserDto,
  GetUsersPasswordDto,
  GetUsersEmailDto,
} from './users/users.dto';

// USERS
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findPassword(): Promise<GetUsersPasswordDto[]> {
    return (
      await this.usersRepository.find({
        skip: 0,
        order: { user_id: 'ASC' },
      })
    ).map(
      (passwords) =>
        ({
          user_id: passwords.user_id,
          password: passwords.password,
        }) as GetUsersPasswordDto,
    );
  }

  async findEmail(): Promise<GetUsersEmailDto[]> {
    return (
      await this.usersRepository.find({
        skip: 0,
        order: { user_id: 'ASC' },
      })
    ).map(
      (emails) =>
        ({
          user_id: emails.user_id,
          email: emails.email,
        }) as GetUsersEmailDto,
    );
  }

  async findAll(): Promise<GetUsersDto[]> {
    return (
      await this.usersRepository.find({
        skip: 0,
        order: { user_id: 'ASC' },
      })
    ).map(
      (users) =>
        ({
          user_id: users.user_id,
          first_name: users.first_name,
          last_name: users.last_name,
          email: users.email,
          date_of_birth: users.date_of_birth,
          sex: users.sex,
        }) as GetUsersDto,
    );
  }

  async create(createUsersDto: CreateUsersDto): Promise<CreateUsersResponse> {
    return this.usersRepository.save(createUsersDto);
  }

  async update(updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: {
        user_id: Equal(updateUserDto.user_id),
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.usersRepository.update(
      {
        user_id: Equal(updateUserDto.user_id),
      },
      {
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        date_of_birth: updateUserDto.date_of_birth,
        sex: updateUserDto.sex,
      },
    );
  }
}
