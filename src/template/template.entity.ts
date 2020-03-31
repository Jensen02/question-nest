/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Description: 问卷模板数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 00:21:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 21:41:06
 */
import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Multiple } from '../enties/multiple.entity'
import { Radio } from '../enties/radio.entity';
import { Answer } from '../enties/answer.entity';
import { Judge } from '../enties/judge.entity';

@Entity()
export class Templete {
  @PrimaryColumn()
  id: string;

  @Column()
  type:string;                 // 模板类型

  @Column()
  title: string;               // 问卷主题

  @Column()
  description: string;         // 问卷描述

  @Column({
    // nullable: true
    default: ''
  })
  filePath: string;            // 问卷封面图片路径

  @Column({
    // nullable: true,
    default: 0
  })
  personLimit: number;         // 问卷限制人数

  @Column()
  endTime: string;             // 问卷结束时间

  @OneToMany(type => Multiple, multiple => multiple.templete, {
    eager: true,
    cascade: true
  })
  multiples: Multiple[];

  @OneToMany(type => Radio, radio => radio.templete, {
    eager: true,
    cascade: true
  })
  radios: Radio[];

  @OneToMany(type => Answer, answer => answer.templete, {
    eager: true,
    cascade: true
  })
  answers: Answer[];

  @OneToMany(type => Judge, judge => judge.templete, {
    eager: true,
    cascade: true
  })
  judges: Judge[];
}