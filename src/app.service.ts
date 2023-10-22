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
import { Notifications } from './notifications/notifications.entity';
import {
  CreateNotificationsResponse,
  CreateNotificationsDto,
  GetNotificationsDto,
  UpdateNotificationDto,
} from './notifications/notifications.dto';

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

// NOTIFICATIONS
@Injectable()
export class AppServiceNotifications {
  constructor(
    @InjectRepository(Notifications)
    private notificationsRepository: Repository<Notifications>,
  ) {}

  async findAll(): Promise<GetNotificationsDto[]> {
    return (
      await this.notificationsRepository.find({
        skip: 0,
        order: { user_id: 'ASC' },
      })
    ).map(
      (notifications) =>
        ({
          user_id: notifications.user_id,
          content: notifications.content,
          used_flag: notifications.used_flag,
          notification_id: notifications.notification_id,
        }) as GetNotificationsDto,
    );
  }

  async create(
    createNotificationsDto: CreateNotificationsDto,
  ): Promise<CreateNotificationsResponse> {
    return this.notificationsRepository.save(createNotificationsDto);
  }

  async update(updateNotificationDto: UpdateNotificationDto): Promise<any> {
    const notifications = await this.notificationsRepository.findOne({
      where: {
        user_id: Equal(updateNotificationDto.user_id),
      },
    });

    if (!notifications) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.notificationsRepository.update(
      {
        user_id: Equal(updateNotificationDto.user_id),
      },
      {
        content: updateNotificationDto.content,
        used_flag: updateNotificationDto.used_flag,
        notification_id: updateNotificationDto.notification_id,
      },
    );
  }
}
