/*
 * @Description: 简答题数据接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 14:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 16:11:38
 */
export class AnswerDto {
  readonly type: string;
  readonly problem: string;
  readonly answer?: string;
}