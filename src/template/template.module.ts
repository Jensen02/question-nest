/*
 * @Description: modulle
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 18:07:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 18:14:42
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Templete } from './template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Templete])],
  controllers: [],
  providers: []
})

export class TempleteModule {}