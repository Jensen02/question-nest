/*
 * @Description: 问卷Controller
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:02:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 01:15:51
 */
import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { randomWord } from '../utils';
import { QuestionnaireService } from './questionnaire.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { CreateQuesOrTempDto } from '../dto';
import { createTopicArray } from '../utils';

@Controller()
export class QuestionnaireController {
  constructor(
    private readonly questionnaireService: QuestionnaireService,
    private readonly userService: UserService
  ) {}

  @Post('create/questionnaire')
  async createQuestionnaire(@Body() createQuesDto: CreateQuesOrTempDto) {
    const { skey, title, description, endTime, multiple, radio, answer, judge, personLimit } = createQuesDto;
    const multiples = createTopicArray('multiple', multiple);
    const radios = createTopicArray('radio', radio);
    const answers = createTopicArray('answer', answer);
    const judges = createTopicArray('judge', judge);
    const id = randomWord('questionnaire', false, 12).concat(String(Date.now()));
    const { uId } = await this.userService.getUserIdWithSkey(decodeURIComponent(skey));
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

  @Get('query/question')
  async getQuestionWithId(@Query('id') id) {
    console.log('id: ', id)
    const resContoller = await this.questionnaireService.getQuestionWithId(id);
    console.log('resc: ', resContoller);
    return resContoller;
  }

  // async updateQuestion() {
    
  // }
}
