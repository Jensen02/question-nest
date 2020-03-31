/*
 * @Description: 问答题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:34:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 21:15:34
 */
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Questionnaire } from '../questionnaire/questionnaire.entity';
import { Templete } from '../template/template.entity';

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
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.answers, {
    onDelete: 'CASCADE'
  })
  questionnaire: Questionnaire;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Templete, templete => templete.answers, {
    onDelete: 'CASCADE'
  })
  templete: Templete;
}