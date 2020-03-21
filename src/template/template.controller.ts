/*
 * @Description: 
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 18:10:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 01:13:46
 */
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { createTopicArray, randomWord } from '../utils'
import { CreateQuesOrTempDto } from '../dto'
import { TempleteService } from './template.service';

@Controller('templete')
export class TempleteController {
  constructor(
    private readonly templeteService: TempleteService
  ) {}

  @Post('create')
  async create(@Body() createTempleteDto: CreateQuesOrTempDto) {
    const { type, title, description, endTime, multiple, radio, answer, judge, personLimit } = createTempleteDto;
    const multiples = createTopicArray('multiple', multiple);
    const radios = createTopicArray('radio', radio);
    const answers = createTopicArray('answer', answer);
    const judges = createTopicArray('judge', judge);
    const id = randomWord('templete', false, 12).concat(String(Date.now()));

    const data = {
      id,
      type,
      title,
      description,
      endTime,
      personLimit,
      multiples,
      radios,
      answers,
      judges
    };

    const tController = await this.templeteService.createTemplete(data);
    return tController;
  }

  @Get('query/list')
  async getTempleteWithType(@Query('type') type) {
    if (!type.length) {
      return {
        code: 0,
        message: '参数错误',
        data: []
      };
    }

    const tController = await this.templeteService.getTempletesWithType(type);
    return tController;
  }
}