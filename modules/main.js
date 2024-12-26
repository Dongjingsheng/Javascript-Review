// main.js

// 导入 calculator.js 中的函数
import { add, subtract, multiply, divide } from './calculator.js';

// 使用导入的函数进行计算
const num1 = 10;
const num2 = 5;

console.log(`加法结果: ${add(num1, num2)}`);
console.log(`减法结果: ${subtract(num1, num2)}`);
console.log(`乘法结果: ${multiply(num1, num2)}`);
console.log(`除法结果: ${divide(num1, num2)}`);