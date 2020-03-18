/*
 * @Description: app module
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-11 20:16:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-11 20:16:47
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QuestionnaireModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
