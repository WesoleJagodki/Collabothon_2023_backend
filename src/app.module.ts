import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.31.106',
      port: 5433,
      password: 'forTheWin',
      username: 'wesoleJagodki',
      entities: [Users],
      database: 'mainDb',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
