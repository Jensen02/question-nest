/*
 * @Description: 问卷相关的数据接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 14:32:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 00:58:38
 */
import { AnswerDto } from './answer.dto';
import { JudgeDto } from './judge.dto';
import { RadioDto } from './readio.dto';
import { MultipleDto } from './multiple.dto';

export class CreateQuesOrTempDto {
  readonly skey?: string;
  readonly type?: string;
  readonly title: string;
  readonly description: string;
  readonly endTime: string;
  readonly multiple: MultipleDto[];
  readonly radio: RadioDto[];
  readonly answer: AnswerDto[];
  readonly judge: JudgeDto[];
  readonly personLimit: number;
}