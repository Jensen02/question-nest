/*
 * @Description: 问卷Controller
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:02:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-25 13:47:30
 */
import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { randomWord } from '../utils';
import { QuestionnaireService } from './questionnaire.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { CreateQuesOrTempDto } from '../dto';
import { createTopicArray } from '../utils';
// import { stat } from 'fs';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(
    private readonly questionnaireService: QuestionnaireService,
    private readonly userService: UserService
  ) {}

  // 创建问卷
  @Post('create')
  async createQuestionnaire(@Body() createQuesDto: CreateQuesOrTempDto) {
    const { skey, title, description, endTime, multiple, radio, answer, judge, personLimit } = createQuesDto;
    const multiples = createTopicArray('multiple', multiple);
    const radios = createTopicArray('radio', radio);
    const answers = createTopicArray('answer', answer);
    const judges = createTopicArray('judge', judge);
    const id = randomWord('questionnaire', false, 12).concat(String(Date.now()));
    const { uId } = await this.userService.getUserIdWithSkey(decodeURIComponent(skey));
    console.log('uid: ', uId);
    const user = new User();
    user.uId = uId;

    const data = {
      id,
      title,
      description,
      endTime,
      personLimit,
      multiples,
      radios,
      answers,
      judges,
      user
    };

    const resContoller = await this.questionnaireService.createQuestionnaire(data)
    console.log('resC: ', resContoller);
    return resContoller;
  }

  // 根据id查询问卷
  @Get('query/id')
  async getQuestionWithId(@Query('id') id: string) {
    console.log('id: ', id)
    const resContoller = await this.questionnaireService.getQuestionWithId(id);
    return resContoller;
  }
  
  // 根据问卷状态查询问卷
  @Get('query/state')
  async getAllQuestions(@Query('state') state: string) {
    console.log('state: ', state);
    if (!state.length) {
      return {
        code: 0,
        message: '参数异常',
        data: {}
      }
    }
    const qController = await this.questionnaireService.getAllQuestions(state);
    return qController;
  }

  // 根据问卷id删除问卷
  @Post('collection/delete')
  async deleteQuestionWithId(@Body('id') id: string) {
    console.log('delete: ', id);
    if (!id.length) {
      return {
        code: 0,
        message: '参数异常',
        data: {}
      }
    }
    const dController = await this.questionnaireService.deleteQuestionWithId(id);
    return dController;
  }

  // 将问卷放入回收站
  @Post('collection')
  async recoverQuestion(@Body('id') id: string) {
    console.log('collection: ', id);
    if (!id.length) {
      return {
        code: 0,
        message: '参数异常',
        data: {}
      }
    }
    const cController = await this.questionnaireService.recoverQuestion(id);
    return cController;
  }

  // 更新问卷状态
  @Post('update/state')
  async updateQuestionState(@Body('id') id: string, @Body('state') state: string) {
    console.log('state: ', state, 'id: ', id);
    if (!id.length || !state.length) {
      return {
        code: 0,
        message: '参数异常',
        data: {}
      };
    }
    const uController = await this.questionnaireService.updateQuestionState(id, state);
    return uController;
  }

  // 获取所有已放入回收站的问卷
  @Get('collection/query/all')
  async getAllCollectionItems() {
    const cController = await this.questionnaireService.getAllCollectionItems();
    return cController;
  }

  // 还原问卷
  @Post('collection/recover')
  async recoverQuestionnaireWithId(@Body('id') id: string) {
    console.log('re: ', id);
    if (!id.length) {
      return {
        code: 0,
        message: '参数异常',
        data: {}
      };
    }
    const rController = await this.questionnaireService.recoverQuestionnaireWithId(id);
    return rController;
  }
}