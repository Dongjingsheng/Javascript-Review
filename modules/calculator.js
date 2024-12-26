// calculator.js

// 导出加法函数
export function add(a, b) {
    return a + b;
}

// 导出减法函数
export function subtract(a, b) {
    return a - b;
}

// 导出乘法函数
export function multiply(a, b) {
    return a * b;
}

// 导出除法函数
export function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为0');
    }
    return a / b;
}