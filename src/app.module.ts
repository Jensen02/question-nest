/*
 * @Description: app module
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 20:16:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 18:15:50
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { TempleteModule } from './template/template.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QuestionnaireModule, UserModule, TempleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
