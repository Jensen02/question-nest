/*
 * @Description: 入口文件
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-22 00:45:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-22 00:46:16
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api/v1');
  await app.listen(3002);
}
bootstrap();
