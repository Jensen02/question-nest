/*
 * @Description: 问卷Controller
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 18:02:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 18:59:57
 */

import { Controller } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';

@Controller()
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}
}
