/*
 * @Description: 问卷Service
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:03:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 01:15:39
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(Questionnaire)
    private readonly questionnaireRepository: Repository<Questionnaire>,
  ) {}

  // 创建问卷
  async createQuestionnaire(data) {
    const questionnaire = this.questionnaireRepository.create(data);
    const quesService =await this.questionnaireRepository.save(questionnaire);
    if (quesService) {
      return {
        code: 1,
        message: '问卷创建成功',
        data: quesService
      };
    }
    return {
      code: 0,
      message: '问卷创建失败',
      data: {}
    };
  }

  // 根据id查询问卷
  async getQuestionWithId(id: string) {
    const question = await this.questionnaireRepository.findOne(id);
    return {
      code: 1,
      message: '查询成功',
      data: question
    };
  }

  // async updateQuestion() {
    
  // }  
}