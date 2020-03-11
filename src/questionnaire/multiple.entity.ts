/*
 * @Description: 多选题数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:53:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 17:55:03
 */

import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity'

@Entity()
export class Multiple {
  @PrimaryColumn()
  mId: string;

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
  eContent: string;

  @Column()
  fContent: string;

  @Column()
  aNumber: number;

  @Column()
  bNumber: number;
  
  @Column()
  cNumber: number;
  
  @Column()
  dNumber: number;
  
  @Column()
  eNumber: number;
  
  @Column()
  fNumber: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.multiples)
  questionnaire: Questionnaire;
}