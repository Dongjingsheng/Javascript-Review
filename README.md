一、考试大范围：第1章至第7章+第9章+第14章  

二、章节后的实验要去做，布置的作业要重点复习。  

三、章节内大概范围：  

### 第1章  
1、在HTML文档中引入JavaScript方法  

### 第2章  
1、标识符命名  
2、数据类型  
3、Number  
4、Undefined  
5、Null  
6、扩展运算符（特重点）  
7、数据类型转换  
8、解构赋值（特重点）  

### 第3章  
1、自定义函数  
2、箭头函数  
3、函数调用  
4、函数返回值  

### 第4章  
1、访问对象的属性  
2、对象的属性名  
3、属性扩展语法  
4、对象解构（特重点）  
5、访问对象数组的值  
6、访问对象中的数组元素  

### 第5章  
1、获取元素API  
2、修改元素内容API  
3、属性操作API（特重点样式操作）  
4、DOM事件  
5、事件驱动  
6、指定事件处理程序  
7、定时器  

### 第6章  
1、数组元素的读取  
2、数组的方法（特重点，常用的方法要掌握，包括高阶的传入回调函数的方法）  

### 第7章 字符串对象  
1、模版字符串  
2、字符串方法  

### 第9章  
1、Math的方法（特重点）记住表9-4方法的使用  

### 第14章 模块  
1、模块的导出与导入（特重点）  
  
  

### 第2章的内容

涉及 JavaScript 语言的基本概念和语法，这些知识点对于理解和使用 JavaScript 编程至关重要。下面是对每个知识点的简要介绍：

- **标识符命名**：标识符是编程时使用的名字，用于表示变量、函数、属性等。在 JavaScript 中，标识符命名需要遵循一定的规则，比如只能包含字母、数字、下划线和美元符号，且不能以数字开头。命名应具有描述性，便于理解代码。

- **数据类型**：JavaScript 是一种动态类型语言，意味着变量可以在运行时改变其数据类型。基本数据类型包括数字（Number）、字符串（String）、布尔值（Boolean）、Undefined 和 Null。

  - **Number**：数字类型包括整数和浮点数。JavaScript 中的数字是以 64 位浮点数形式存储的，这可能导致某些数学运算的不精确。

  - **Undefined**：当一个变量被声明但没有被赋值时，它的值就是 Undefined。这通常意味着变量没有明确的值。

  - **Null**：Null 是一个表示“空”或“不存在”的特殊值。当需要明确表示一个变量没有值时，可以将其设置为 Null。

- **扩展运算符（...）**：扩展运算符允许一个表达式在期望多个参数（用于函数调用）或多个元素（用于数组字面量）的位置展开。它主要用于函数调用、数组构造和字符串字面量中。
  ### 1. 合并数组

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2];
  console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
  ```

  ### 2. 复制数组

  ```javascript
  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray];
  console.log(copiedArray); // [1, 2, 3]
  ```

  ### 3. 将数组中的元素插入到另一个数组

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr1.push(...arr2);
  console.log(arr1); // [1, 2, 3, 4, 5, 6]
  ```

  ### 4. 复制对象

  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1 };
  console.log(obj2); // { a: 1, b: 2 }
  ```

  ### 5. 合并对象

  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const mergedObject = { ...obj1, ...obj2 };
  console.log(mergedObject); // { a: 1, b: 3, c: 4 }
  ```

  ### 6. 函数参数中的应用

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const max = Math.max(...numbers);
  console.log(max); // 5
  ```

- **数据类型转换**：JavaScript 经常需要将数据从一种类型转换为另一种类型。这可以通过显式转换（使用转换函数，如 `Number()`、`String()`、`Boolean()`）或隐式转换（在特定操作中自动发生）来实现。

- **解构赋值**：解构赋值是一种表达式，可以将数组或对象中的值解包到不同的变量中。它提供了一种简洁、易读的方式来从数组或对象中提取数据，同时为变量赋值。

## 数组解构赋值

数组解构赋值可以将数组中的元素分别赋值给多个变量。

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a); // 输出：1
console.log(b); // 输出：2
console.log(c); // 输出：3
```

### 特性
- **跳过元素**：
  ```javascript
  let [a, , c] = [1, 2, 3];
  console.log(a); // 输出：1
  console.log(c); // 输出：3
  ```
- **默认值**：
  ```javascript
  let [a, b = 10] = [5];
  console.log(a); // 输出：5
  console.log(b); // 输出：10
  ```

## 对象解构赋值

对象解构赋值可以将对象中的属性赋值给变量。

```javascript
let { name, age } = { name: "张三", age: 30 };
console.log(name); // 输出："张三"
console.log(age);  // 输出：30
```

### 特性
- **重命名变量**：
  ```javascript
  let { name: username, age } = { name: "张三", age: 30 };
  console.log(username); // 输出："张三"
  console.log(age);      // 输出：30
  ```
- **默认值**：
  ```javascript
  let { name, gender = "男" } = { name: "张三" };
  console.log(name);  // 输出："张三"
  console.log(gender); // 输出："男"
  ```

## 解构赋值的用途

### 1. 交换变量值
解构赋值可以轻松地交换两个变量的值。

```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 输出：2
console.log(y); // 输出：1
```

### 2. 函数返回多个值
通过函数返回一个数组或对象，并使用解构赋值提取值。

```javascript
function getUser() {
  return { name: "张三", age: 30 };
}

let { name, age } = getUser();
console.log(name); // 输出："张三"
console.log(age);  // 输出：30
```

### 3. 函数参数解构
在函数参数中直接使用解构赋值。

```javascript
function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "张三", age: 30 }); // 输出："张三" 30
```

### 4. 嵌套解构
解构赋值支持嵌套的数组或对象。

```javascript
let [a, [b, c]] = [1, [2, 3]];
console.log(a); // 输出：1
console.log(b); // 输出：2
console.log(c); // 输出：3
```

## 注意事项

1. **null 或 undefined**  
   如果解构赋值时，等号右侧的值为 `null` 或 `undefined`，会抛出错误。
   ```javascript
   let { a } = null; // TypeError: Cannot destructure property 'a' of null
   ```

2. **设置默认值**  
   为防止解构结果为 `undefined`，可以设置默认值：
   ```javascript
   let [a = 1] = [];
   console.log(a); // 输出：1
   ```

3. **浅拷贝**  
   解构赋值是浅拷贝，对于对象属性只拷贝引用：
   ```javascript
   let obj = { a: { b: 1 } };
   let { a } = obj;
   a.b = 2;
   console.log(obj.a.b); // 输出：2
   ```



1. JavaScript中的合法标识符是：A. 2name B. myname C. @name D. function 正确答案：B
2. 下列哪个选项不属于JavaScript的基本数据类型？ A. Number B. String C. Boolean D. Object 正确答案：D
3. 扩展运算符（…）在函数调用中的用途是什么？ A. 将数组转换为函数参数 B. 将函数参数转换为数组 C. 将对象属性复制到另一个对象 D. 将字符串分割为数组 正确答案：A
4. 下列哪个选项是正确的数据类型转换方式？ A. Number("123") B. String(456) C. Boolean("false") D. Object(789) 正确答案：A
5. 解构赋值主要用于从哪些结构中提取数据？ A. 数组 B. 对象 C. 函数 D. 字符串 正确答案：A
6. 在JavaScript中，以下哪个是未定义（undefined）的类型？ A. var a; B. var b = null; C. var c = 0; D. var d = "empty" 正确答案：A
7. 以下哪个表达式会返回布尔值true？ A. Boolean(undefined) B. Boolean(null) C. Boolean(0) D. Boolean("false") 正确答案：D
8. 以下哪个选项是使用解构赋值从对象中提取属性的正确方式？ A. const { x, y } = { x: 1, y: 2 }; B. const [x, y] = { x: 1, y: 2 }; C. const { x, y } = [1, 2]; D. const [x, y] = [1, 2] 正确答案：A
9. 以下哪个选项是正确的使用扩展运算符（…）的方式？ A. const arr = [1, 2, ...3, 4]; B. const arr = [1, 2, 3, ...4]; C. const arr = [1, 2, ...[3, 4]]; D. const arr = [1, 2, 3, ...[4]] 正确答案：C
10. 在JavaScript中，以下哪个函数可以将字符串转换为数字？ A. parseInt("123") B. parseFloat("123.45") C. Number("123") D. 所有选项都是正确的 正确答案：D

