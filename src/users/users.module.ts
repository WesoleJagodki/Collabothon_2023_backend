import { Module } from '@nestjs/common';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [AppController],
  providers: [AppService],
})
export class UsersModule {}
