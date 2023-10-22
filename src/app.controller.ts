import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { AppService, AppServiceNotifications } from './app.service';
import {
  CreateUsersDto,
  GetUsersPasswordDto,
  UpdateUserDto,
} from './users/users.dto';
import {
  CreateNotificationsDto,
  UpdateNotificationDto,
} from './notifications/notifications.dto';

// USERS
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users_passwords')
  getPassword() {
    return this.appService.findPassword();
  }

  @Get('/users_emails')
  getEmail() {
    return this.appService.findEmail();
  }

  @Get('/users')
  getUsers() {
    return this.appService.findAll();
  }

  @Post('/users')
  createUsers(@Body() createUsersDto: CreateUsersDto) {
    console.log(createUsersDto);
    return this.appService.create(createUsersDto);
  }

  @Put('/users')
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.appService.update(updateUserDto);
  }
}

// NOTIFICATIONS
@Controller()
export class AppControllerNotifications {
  constructor(
    private readonly appServiceNotifications: AppServiceNotifications,
  ) {}

  @Get('/notifications')
  getNotifications() {
    return this.appServiceNotifications.findAll();
  }

  @Post('/notifications')
  createNotifications(@Body() createNotificationsDto: CreateNotificationsDto) {
    console.log(createNotificationsDto);
    return this.appServiceNotifications.create(createNotificationsDto);
  }

  @Put('/notifications')
  updateNotification(@Body() updateNotificationDto: UpdateNotificationDto) {
    return this.appServiceNotifications.update(updateNotificationDto);
  }
}
