/*
 * @Description: 单选题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:55:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 21:14:39
 */

import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Questionnaire } from '../questionnaire/questionnaire.entity';
import { Templete } from '../template/template.entity';

@Entity()
export class Radio {
  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  problem: string;

  @Column({
    default: ''
  })
  aContent: string;

  @Column({
    default: ''
  })
  bContent: string;
  
  @Column({
    default: ''
  })
  cContent: string;
  
  @Column({
    default: ''
  })
  dContent: string;

  @Column({
    default: 0
  })
  aNumber: number;
  
  @Column({
    default: 0
  })
  bNumber: number;
  
  @Column({
    default: 0
  })
  cNumber: number;
  
  @Column({
    default: 0
  })
  dNumber: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.radios, {
    onDelete: 'CASCADE'
  })
  questionnaire: Questionnaire;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Templete, templete => templete.radios, {
    onDelete: 'CASCADE'
  })
  templete: Templete;
}