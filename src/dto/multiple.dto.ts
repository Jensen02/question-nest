/*
 * @Description: 多选题数据接口
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 14:36:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 16:11:50
 */
export class MultipleDto {
  readonly type: string;
  readonly problem: string;
  readonly aContent?: string;
  readonly bContent?: string;
  readonly cContent?: string;
  readonly dContent?: string;
  readonly eConent?: string;
  readonly fConent?: string;
  readonly aNumber?: number;
  readonly bNumber?: number;
  readonly cNumber?: number;
  readonly dNumber?: number;
  readonly eNumber?: number;
  readonly fNumber?: number;
}