/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Description: 问卷数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 17:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 17:56:22
 */

import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Multiple } from './multiple.entity';
import { Radio } from './radio.entity';
import { Answer } from './answer.entity';
import { Judge } from './judge.entity';

@Entity()
export class Questionnaire {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;               // 问卷主题

  @Column('text')
  description: string;         // 问卷描述

  @Column()
  filePath: string;            // 问卷封面图片路径

  @Column()
  attendNumber: number;        // 已参加问卷人数

  @Column()
  personLimit: number;         // 问卷限制人数

  @Column()
  state: string;               // 问卷当前状态

  @Column()
  endTime: string;             // 问卷结束时间

  @OneToMany(type => Multiple, multiple => multiple.questionnaire, {
    eager: true,
    cascade: true
  })
  multiples: Multiple[];

  @OneToMany(type => Radio, radio => radio.questionnaire, {
    eager: true,
    cascade: true
  })
  radios: Radio[];

  @OneToMany(type => Answer, answer => answer.questionnaire, {
    eager: true,
    cascade: true
  })
  answers: Answer[];

  @OneToMany(type => Judge, judge => judge.questionnaire, {
    eager: true,
    cascade: true
  })
  judges: Judge[];
}