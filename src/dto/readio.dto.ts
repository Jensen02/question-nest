/*
 * @Description: 单选题数据接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 14:37:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 16:11:59
 */
export class RadioDto {
  readonly type: string;
  readonly problem: string;
  readonly aContent?: string;
  readonly bContent?: string;
  readonly cContent?: string;
  readonly dContent?: string;
  readonly aNumber?: number;
  readonly bNumber?: number;
  readonly cNumber?: number;
  readonly dNumber?: number;
}