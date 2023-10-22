import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { Notifications } from "./notifications/notifications.entity";
import { NotificationsModule } from "./notifications/notifications.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.31.106',
      port: 5433,
      password: 'forTheWin',
      username: 'wesoleJagodki',
      entities: [Users, Notifications],
      database: 'mainDb',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    NotificationsModule,
  ],
})
export class AppModule {}
