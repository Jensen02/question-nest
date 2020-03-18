/*
 * @Description: 用户信息数据模型
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 19:00:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-17 00:30:34
 */
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Questionnaire } from '../questionnaire/questionnaire.entity';

@Entity()
export class User {
  @PrimaryColumn()
  uId: string;

  @Column()
  sessionKey: string;

  @Column()
  skey: string;

  @Column()
  openId: string;
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany(type => Questionnaire, questionnaire => questionnaire.user)
  questionnaires: Questionnaire[];
}