import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUsersDto, UpdateUserDto } from './users/users.dto';

// USERS
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
