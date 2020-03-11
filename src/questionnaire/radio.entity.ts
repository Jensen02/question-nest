/*
 * @Description: 单选题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:55:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 17:55:49
 */

import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';

@Entity()
export class Radio {
  @PrimaryColumn()
  rId: string;

  @Column()
  type: string;

  @Column()
  problem: string;

  @Column()
  aContent: string;

  @Column()
  bContent: string;
  
  @Column()
  cContent: string;
  
  @Column()
  dContent: string;

  @Column()
  aNumber: number;
  
  @Column()
  bNumber: number;
  
  @Column()
  cNumber: number;
  
  @Column()
  dNumber: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.radios)
  questionnaire: Questionnaire;
}