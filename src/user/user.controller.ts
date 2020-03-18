/*
 * @Description: 用户controller
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 20:29:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-16 00:03:34
 */
import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user/login')
  async userLogin(@Body('code') code) {
    console.log('code: ', code)
    const data = await this.userService.userLogin(code);
    return data;
  }
}