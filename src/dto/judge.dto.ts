/*
 * @Description: 判断题型相关的数据接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 14:37:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 16:11:25
 */
export class JudgeDto {
  readonly type: string;
  readonly problem:string;
  readonly yesConent?: string;
  readonly noConent?: string;
  readonly yesNUmber?: number;
  readonly  noNumber?: number;
}