/*
 * @Description: 问卷Service
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:03:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-25 23:56:44
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, Not } from 'typeorm';
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

  // 根据问卷状态查询问卷
  async getAllQuestions(state: string) {
    const allQuestions = await this.questionnaireRepository.find({ 
      state: Equal(state),
      isDelete: Not(true)
    });
    return {
      code: 1,
      message: '查询成功',
      data: allQuestions
    };
  }

  // 根据问卷id删除问卷
  async deleteQuestionWithId(id: string) {
    const deletsService = await this.questionnaireRepository.delete(id);
    console.log('deSer: ', deletsService);
    if (deletsService) {
      return {
        code: 1,
        message: '问卷删除成功',
        data: deletsService
      };
    }
  }

  // 将问卷放入回收站
  async recoverQuestion(id: string) {
    const cService = await this.questionnaireRepository.update(id, {
      isDelete: true
    });
    if (cService) {
      return {
        code: 1,
        message: '问卷回收成功',
        data: cService
      };
    }
  }

  // 更新问卷状态
  async updateQuestionState(id: string, state: string) {
    const uService = await this.questionnaireRepository.update(id, {
      state
    });
    if (uService) {
      return {
        code: 1,
        message: '问卷状态更新成功',
        data: uService
      };
    }
  }

  // 获取所有已放入回收站的问卷
  async getAllCollectionItems() {
    const cService = await this.questionnaireRepository.find({
      where: {
        isDelete: true
      }
    });
    if (cService) {
      return {
        code: 1,
        message: '回收站问卷查询成功',
        data: cService
      };
    }
  }

  // 还原问卷
  async recoverQuestionnaireWithId(id: string) {
    const rService = await this.questionnaireRepository.update(id, {
      isDelete: false
    });
    if (rService) {
      return {
        code: 1,
        message: '问卷还原成功',
        data: rService
      };
    }
  }
}