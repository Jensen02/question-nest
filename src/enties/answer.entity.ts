/*
 * @Description: 问答题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:34:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 18:14:30
 */
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Questionnaire } from '../questionnaire/questionnaire.entity';

@Entity()
export class Answer {
  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  problem: string;

  @Column('text', {
    nullable: true
  })
  answer: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.answers)
  questionnaire: Questionnaire;
}