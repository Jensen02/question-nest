/*
 * @Description: 用户controller
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 20:29:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 00:45:25
 */
import { Controller, Post, Body, Get, Query } from '@nestjs/common'
import { UserService } from './user.service'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user/login')
  async userLogin(@Body('code') code) {
    const data = await this.userService.userLogin(code);
    return data;
  }

  @Get('user/id')
  async getUserIdWithSkey(@Query('skey') skey) {
    // const skey = decodeURIComponent(query.skey);
    const data = await this.userService.getUserIdWithSkey(decodeURIComponent(skey));
    return data;
  }
}