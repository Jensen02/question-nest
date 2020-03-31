/*
 * @Description: modulle
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 18:07:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-31 21:00:11
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TempleteController } from './template.controller';
import { TempleteService } from './template.service';
import { Templete } from './template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Templete])],
  controllers: [TempleteController],
  providers: [TempleteService]
})

export class TempleteModule {} 