/*
 * @Description: 工具函数
 * @GitHub: https://github.com/Jensen02
 * @Author: Jensen
 * @Date: 2020-03-19 00:49:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 17:05:57
 */
import { Radio, Multiple, Judge, Answer } from '../enties';
import { AnswerDto, RadioDto, MultipleDto, JudgeDto } from '../dto';

/**
 * @description: 生成随机字符串
 * @param {string} prefix 生成随机字符串的前缀
 * @param {boolean} randomFlag 是否生成随机长度的字符串
 * @param {number} min 随机字符串的最小长度
 * @param {number} max 随机字符的最大长度
 * @return: 
 */ 
export const randomWord = (prefix: string, randomFlag: boolean, min: number, max?: number): string => {
  if (!prefix.length) {
    return;
  }
  let str = "";
  let range = min;
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if(randomFlag){
      range = Math.round(Math.random() * (max-min)) + min;
  }
  for(let i=0; i<range; i++){
      const pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
  }
  return prefix.concat(str);
}

/**
 * @description: 生成相关题目的对象数组
 * @param {string} type 需要生成的题目的类型
 * @param {Array} topic 题目数组
 * @return: 由每个题目生成的对象数组
 */
export const createTopicArray = <T>(type: string, topic: Array<MultipleDto | RadioDto | AnswerDto | JudgeDto>): any[] => {
  if (!type.length || !topic.length) {
    return [];
  }
  const result = topic.map((item) => {
    let temp: Radio | Multiple | Judge | Answer;
    if (type === 'radio') {
      temp = new Radio();
    } else if (type === 'multiple') {
      temp = new Multiple();
    } else if (type === 'judge') {
      temp = new Judge();
    } else {
      temp = new Answer();
    }
    for (const [key, value] of Object.entries(item)) {
      temp[key] = value;
    }
    const id = randomWord(type, false, 12).concat(String(Date.now()));
    temp['id'] = id;
    return temp;
  })
  return result;
}