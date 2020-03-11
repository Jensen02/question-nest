/*
 * @Description: 判断题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:54:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 17:54:39
 */

import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { Questionnaire } from './questionnaire.entity';

@Entity()
export class Judge {
  @PrimaryColumn()
  jId: string;

  @Column()
  type: string;

  @Column()
  problem: string;

  @Column()
  yesContent: string;

  @Column()
  noContent: string;

  @Column()
  yesNumber: number;

  @Column()
  noNumber: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.judges)
  questionnaire: Questionnaire;
}