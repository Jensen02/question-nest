/*
 * @Description: 问卷Service
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:03:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 17:21:35
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, Equal, Not } from 'typeorm';
import * as moment from 'moment';
import { Questionnaire } from './questionnaire.entity';
import { Radio, Multiple, Answer, Judge } from '../enties'

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
  
  // 提交问卷
  async submitQuestionnaire(data: any) {
    const { id, radio, multiple, judge, answer } = data;
    // 获取问卷已提交人数、问卷限制人数、问卷截止时间
    const sService = await this.questionnaireRepository.findOne(id, {
      select: ['attendNumber', 'personLimit', 'endTime']
    });
    const { attendNumber, personLimit, endTime } = sService;
    // 判断问卷提交人数是否已达到限制人数
    if ((personLimit > 0 && attendNumber < personLimit) || personLimit <= 0) {
      return {
        code: 0,
        message: '该问卷提交数量已经达到限制人数，无法再提交！',
        data: {}
      };
    }
    // 判断问卷提交截止时间已过
    if (moment(endTime).isBefore(moment().format('YYYY-MM-DD'))) {
      return {
        code: 0,
        message: '问卷提交时间已过，无法提交',
        data: {}
      };
    }

    const uRadio = await this.submitRadio(radio);
    const uMultiple = await this.submitMultiple(multiple);
    const uJudge = await this.submitJudge(judge);
    const uAnswer = await this.submitAnswer(answer);
    
    if (uAnswer && uJudge && uMultiple && uRadio) {
      return {
        code: 0,
        message: '问卷提交失败',
        data: {}
      };
    }
    return {
      code: 1,
      message: '问卷提交成功',
      data: {}
    };
  }

  // 更新单选题目
  async submitRadio(data: any) {
    if (!data) {
      return true;
    }
    const radioRepository = getRepository(Radio);
    for (const [id, value] of data.entries()) {
      const radio = radioRepository.create({ id });
      const uService = await radioRepository.increment(radio, value, 1);
      if (!uService) {
        return false;
      }
    }
    return true;
  }
  
  // 更新多选题目
  async submitMultiple(data: any) {
    if (!data) {
      return true;
    }
    const multipleRepository = getRepository(Multiple);
    for (const [id, value] of data.entries()) {
      const multiple = multipleRepository.create({ id });
      const uService = await multipleRepository.increment(multiple, value, 1);
      if (!uService) {
        return false;
      }
    }
    return true;
  }

  // 更新判断题目
  async submitJudge(data: any) {
    if (!data) {
      return true;
    }
    const judgeRepository = getRepository(Judge);
    for (const [id, value] of data.entries()) {
      const judge = judgeRepository.create({ id });
      const uService = await judgeRepository.increment(judge, value, 1);
      if (!uService) {
        return false;
      }
    }
    return true;
  }

  // 更新简答题目
  async submitAnswer(data: any) {
    if (!data) {
      return true;
    }
    const answerRepository = getRepository(Answer);
    for (const [id, answer] of data.entries()) {
      const uService = await answerRepository.update(id, {
        answer
      });
      if (!uService) {
        return false;
      }
    }
    return true;
  }
}