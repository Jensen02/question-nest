/* eslint-disable @typescript-eslint/camelcase */
/*
 * @Description: 用户service
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 20:29:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 16:18:40
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import { createHash } from 'crypto';
import config from '../config/config';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  // 用户登录
  async userLogin(code: string) {
    const data = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: config.appid,
        secret: config.secret,
        js_code: code,
        grant_type: 'authorization_code'
      }
    });
    const { openid, session_key } = data.data;
    const skey = createHash('sha1').update(session_key, 'utf8').digest('base64');
    const user = this.userRepository.create({
      uId: openid,
      sessionKey: session_key,
      skey: skey,
      openId: openid
    });
    await this.userRepository.save(user);
    return {
      skey
    };
  }

  // 获取用户id
  async getUserIdWithSkey(skey: string): Promise<User> {
    const data = await this.userRepository.find({
      select: ['uId'],
      where: {
        skey: skey
      }
    });
    return data[0];
  }
}