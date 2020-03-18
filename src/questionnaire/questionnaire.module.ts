/*
 * @Description: 问卷Module
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:04:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 18:04:28
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireController } from './questionnaire.controller';
import { QuestionnaireService } from './questionnaire.service';
import { Questionnaire } from './questionnaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire])],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService]
})

export class QuestionnaireModule {}