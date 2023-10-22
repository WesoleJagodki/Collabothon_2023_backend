import { Module } from '@nestjs/common';
import { Notifications } from './notifications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppControllerNotifications } from '../app.controller';
import { AppServiceNotifications } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  controllers: [AppControllerNotifications],
  providers: [AppServiceNotifications],
})
export class NotificationsModule {}
