import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUsersDto, GetUsersPasswordDto, UpdateUserDto } from "./users/users.dto";

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
