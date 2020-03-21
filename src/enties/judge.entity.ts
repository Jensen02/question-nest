/*
 * @Description: 判断题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:54:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 18:35:12
 */

import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { Questionnaire } from '../questionnaire/questionnaire.entity';

@Entity()
export class Judge {
  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  problem: string;

  @Column({
    default: ''
  })
  yesContent: string;

  @Column({
    default: '',
  })
  noContent: string;

  @Column({
    default: 0
  })
  yesNumber: number;

  @Column({
    default: 0
  })
  noNumber: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.judges)
  questionnaire: Questionnaire;
}