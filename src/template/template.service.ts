/*
 * @Description: 
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 18:11:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 01:10:48
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Templete } from './template.entity';

@Injectable()
export class TempleteService {
  constructor(
    @InjectRepository(Templete)
    private readonly templeteRepository: Repository<Templete>,
  ) {}

  // 添加问卷模板
  async createTemplete(data) {
    const template = this.templeteRepository.create(data);
    const templateService = await this.templeteRepository.save(template);
    if (templateService) {
      return {
        code: 1,
        message: '模板添加成功',
        data: templateService
      };
    }
    return {
      code: 1,
      message: '模板添加失败',
      data: {}
    };
  }

  // 根据模板类型，获取模板列表
  async getTempletesWithType(type) {
    const tService =await this.templeteRepository.find({
      select: ['type', 'title', 'description', 'endTime', 'personLimit', 'multiples', 'radios', 'answers', 'judges'],
      where: {
        type
      }
    });
    return {
      code: 1,
      message: '获取模板列表成功',
      data: tService
    }
  }
}