/*
 * @Description: user modudle
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-16 00:06:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-18 22:48:44
 */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { User } from './user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule {}