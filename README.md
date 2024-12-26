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

# 解构赋值

**解构赋值** 是一种表达式，可以将数组或对象中的值解包到不同的变量中。它提供了一种简洁、易读的方式来从数组或对象中提取数据，同时为变量赋值。

---

## 数组解构赋值

数组解构赋值允许将数组中的元素分别赋值给多个变量。

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

---

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

---

## 解构赋值的用途

### 1. 交换变量值
可以轻松地交换两个变量的值：

```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 输出：2
console.log(y); // 输出：1
```

### 2. 函数返回多个值
通过函数返回数组或对象，并使用解构赋值提取值：

```javascript
function getUser() {
  return { name: "张三", age: 30 };
}

let { name, age } = getUser();
console.log(name); // 输出："张三"
console.log(age);  // 输出：30
```

### 3. 函数参数解构
可以直接在函数参数中使用解构赋值：

```javascript
function printUser({ name, age }) {
  console.log(name, age);
}

printUser({ name: "张三", age: 30 }); // 输出："张三" 30
```

### 4. 嵌套解构
支持对嵌套的数组或对象进行解构：

```javascript
let [a, [b, c]] = [1, [2, 3]];
console.log(a); // 输出：1
console.log(b); // 输出：2
console.log(c); // 输出：3
```

---

## 注意事项

1. **null 或 undefined**  
   如果解构赋值时，等号右侧的值为 `null` 或 `undefined`，会抛出错误：
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

---

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


# 第3章：函数

## 1. 自定义函数

自定义函数是通过 `function` 关键字定义的，可以接受参数并执行特定的任务。函数可以重复调用，有助于代码的模块化和重用。

### 示例
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // 输出：Hello, Alice!
```

---

## 2. 箭头函数

箭头函数是 ES6 引入的一种写法，提供了一种更简洁的方式来编写函数表达式。需要注意的是，箭头函数不适用于定义对象方法或构造函数。

### 示例
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 输出：8
```

---

## 3. 函数调用

函数调用是通过在函数名后面加上括号和参数来执行的。如果函数不接受参数，则调用时括号内为空。

### 示例
```javascript
function sayHello() {
  console.log("Hello!");
}
sayHello(); // 输出：Hello!
```

---

## 4. 函数返回值

函数可以使用 `return` 语句返回一个值。如果没有 `return` 语句，函数默认返回 `undefined`。

### 示例
```javascript
function multiply(a, b) {
  return a * b;
}
const result = multiply(4, 2);
console.log(result); // 输出：8
```


# 函数相关选择题

## 1. 函数定义：以下哪个选项是定义自定义函数的正确方式？
- A. `function: myFunction()`
- B. `function myFunction()`
- C. `myFunction function()`
- D. `function myFunction()`

**答案**：B. `function myFunction()`

---

## 2. 函数参数：如果一个函数定义了两个参数，但在调用时只传递了一个参数，会发生什么？
- A. 函数将抛出错误
- B. 第二个参数将被设置为 `undefined`
- C. 函数将忽略第二个参数
- D. 函数将返回 `null`

**答案**：B. 第二个参数将被设置为 `undefined`

---

## 3. 箭头函数：以下哪个选项是箭头函数的正确语法？
- A. `(args) => { ... }`
- B. `args => { ... }`
- C. `function(args) { ... }`
- D. `(args) => { ... }`

**答案**：A. `(args) => { ... }`

---

## 4. 函数调用：以下哪个选项是调用函数的正确方式？
- A. `myFunction();`
- B. `myFunction;`
- C. `function myFunction();`
- D. `call myFunction();`

**答案**：A. `myFunction();`

---

## 5. 函数返回值：如果一个函数没有 `return` 语句，它返回的是什么？
- A. `null`
- B. `undefined`
- C. 空字符串
- D. `0`

**答案**：B. `undefined`

---

## 6. 高阶函数：以下哪个选项是高阶函数的定义？
- A. 一个函数返回另一个函数
- B. 一个函数可以记住并访问其词法作用域，即使函数在其词法作用域之外执行
- C. 一个函数可以作为参数传递给另一个函数
- D. 所有上述选项

**答案**：D. 所有上述选项

---

## 7. 箭头函数与普通函数的区别：以下哪个选项描述了箭头函数和普通函数的区别？
- A. 箭头函数没有自己的 `this`、`arguments`、`super` 或 `new.target`
- B. 箭头函数不能用作构造函数
- C. 箭头函数不绑定 `arguments` 对象
- D. 所有上述选项

**答案**：D. 所有上述选项

---

## 8. 函数作用域：以下哪个选项描述了函数作用域的概念？
- A. 每个函数创建一个新的作用域
- B. 函数内部可以访问外部作用域的变量
- C. 函数外部不能访问内部作用域的变量
- D. 所有上述选项

**答案**：D. 所有上述选项

---

## 9. 闭包：以下哪个选项描述了闭包的概念？
- A. 一个函数返回另一个函数
- B. 一个函数可以记住并访问其词法作用域，即使函数在其词法作用域之外执行
- C. 一个函数可以作为参数传递给另一个函数
- D. 所有上述选项

**答案**：B. 一个函数可以记住并访问其词法作用域，即使函数在其词法作用域之外执行

---

## 10. 立即执行函数：以下哪个选项是立即执行函数的正确语法？
- A. `(function() { ... })();`
- B. `function() { ... }();`
- C. `(function() { ... })();`
- D. `function() { ... }()`

**答案**：A. `(function() { ... })();`


# 第4章：对象和属性

## 1. 访问对象的属性

在 JavaScript 中，可以使用 **点表示法**或**方括号表示法**来访问对象的属性。

### 示例
```javascript
const person = {
  name: "Alice",
  age: 30
};
console.log(person.name); // 点表示法
console.log(person["age"]); // 方括号表示法
```

---

## 2. 对象的属性名

对象的属性名可以是任何有效的 JavaScript 字符串，包括空字符串。如果属性名包含特殊字符或关键字，或者是动态计算的值，应该使用**方括号表示法**。

### 示例
```javascript
const obj = {
  "first name": "John",
  123: "Number as a key",
  [Symbol("key")]: "Symbol as a key"
};
console.log(obj["first name"]); // "John"
console.log(obj[123]); // "Number as a key"
console.log(obj[Symbol("key")]); // "Symbol as a key"
```

---

## 3. 属性扩展语法

**属性扩展语法**允许您将一个对象的所有可枚举属性复制到另一个对象中。常用方法包括 `Object.assign()` 和 **扩展运算符（...）**。

### 示例
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }
```

---

## 4. 对象解构（特重点）

**对象解构**允许您从对象中提取属性，并赋值给变量。这是一种简洁的语法，可以大幅简化代码。

### 示例
```javascript
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age); // 30
```

---

## 5. 访问对象数组的值

对于**对象数组**，可以使用数组索引和属性名来访问特定对象的属性。

### 示例
```javascript
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];
console.log(people[0].name); // "Alice"
console.log(people[1].age); // 25
```

---

## 6. 访问对象中的数组元素

如果对象中的一个属性是数组，可以使用**点表示法**或**方括号表示法**来访问数组的元素。

### 示例
```javascript
const obj = {
  names: ["Alice", "Bob", "Charlie"]
};
console.log(obj.names[0]); // "Alice"
console.log(obj["names"][1]); // "Bob"
```


# 对象与属性相关知识点

## 1. 访问对象属性

以下哪个选项是访问对象属性的正确方式？  

- A. `object.property`  
- B. `object[property]`  
- C. `object["property"]`  
- **D. 所有上述选项**

**答案：D. 所有上述选项**  

---

## 2. 对象属性名

以下哪个选项是有效的对象属性名？  

- A. `"first name"`  
- B. `123`  
- C. `[1, 2, 3]`  
- **D. 所有上述选项**

**答案：D. 所有上述选项**  

---

## 3. 属性扩展语法

以下哪个选项是扩展对象属性的正确方式？  

- A. `Object.assign(obj1, obj2)`  
- B. `{ ...obj1, ...obj2 }`  
- C. `obj1 + obj2`  
- **D. 所有上述选项**

**答案：B. `{ ...obj1, ...obj2 }`**

---

## 4. 对象解构

以下哪个选项是解构对象属性的正确方式？  

- A. `const { name, age } = person;`  
- B. 
  ```javascript
  const name = person.name;
  const age = person.age;
  ```  
- C. `const [name, age] = person;`  
- **D. 所有上述选项**

**答案：A. `const { name, age } = person;`**

---

## 5. 访问对象数组的值

以下哪个选项是访问对象数组中特定对象属性的正确方式？  

- A. `array[0].property`  
- B. `array[0][property]`  
- C. `array[0]["property"]`  
- **D. 所有上述选项**

**答案：D. 所有上述选项**

---

## 6. 对象中的数组元素

以下哪个选项是访问对象中数组元素的正确方式？  

- A. `object.array[0]`  
- B. `object["array"][0]`  
- C. `object.array["0"]`  
- **D. 所有上述选项**

**答案：A. `object.array[0]`**

---

## 7. 对象方法

以下哪个选项是定义对象方法的正确方式？  

- A. `method: function() { ... }`  
- B. `method: () => { ... }`  
- C. `method() { ... }`  
- **D. 所有上述选项**

**答案：A. `method: function() { ... }`**

---

## 8. 对象遍历

以下哪个选项是遍历对象属性的正确方式？  

- A. `for (let key in object) { ... }`  
- B. `for (let value of object) { ... }`  
- C. `object.forEach((key, value) => { ... })`  
- **D. 所有上述选项**

**答案：A. `for (let key in object) { ... }`**

---

## 9. 对象构造函数

以下哪个选项是定义对象构造函数的正确方式？  

- A. `function MyObject() { ... }`  
- B. `class MyObject { ... }`  
- C. `const MyObject = () => { ... }`  
- **D. 所有上述选项**

**答案：A. `function MyObject() { ... }`**

---

## 10. 对象原型

以下哪个选项是访问对象原型的正确方式？  

- A. `Object.getPrototypeOf(obj)`  
- B. `obj.__proto__`  
- C. `obj.prototype`  
- **D. 所有上述选项**

**答案：A. `Object.getPrototypeOf(obj)`**

   

# 第5章：DOM操作与事件处理

## 1. 获取元素的 API

通过不同的方法，可以获取 DOM 元素并进行操作。

### 示例代码

```javascript
// 获取 ID 为 "myElement" 的元素
const element = document.getElementById("myElement");

// 获取第一个类名为 "myClass" 的元素
const firstClassElement = document.querySelector(".myClass");

// 获取所有类名为 "myClass" 的元素（返回一个 NodeList）
const allClassElements = document.querySelectorAll(".myClass");
```

---

## 2. 修改元素内容的 API

可以通过以下方式动态修改元素的内容。

### 示例代码

```javascript
// 设置元素的文本内容
element.textContent = "Hello, world!";

// 设置元素的 HTML 内容
element.innerHTML = "<strong>Hello, world!</strong>";
```

---

## 3. 属性操作的 API（样式操作重点）

通过以下方法可以操作 DOM 元素的属性和样式。

### 示例代码

```javascript
// 设置元素的自定义属性
element.setAttribute("data-custom", "value");

// 获取元素的自定义属性值
const value = element.getAttribute("data-custom");

// 动态修改元素的样式属性
element.style.color = "red";
element.style.fontSize = "18px";
```

---

## 4. DOM 事件

为 DOM 元素绑定事件处理程序，以便在事件发生时执行代码。

### 示例代码

```javascript
// 为元素添加点击事件处理程序
element.addEventListener("click", function () {
  console.log("Element clicked!");
});

// 为元素添加鼠标移入事件处理程序
element.addEventListener("mouseover", function () {
  console.log("Mouse over element!");
});
```

---

## 5. 事件驱动

事件驱动允许在用户与页面交互时触发代码。

### 示例代码

```javascript
// 获取按钮元素
const button = document.getElementById("myButton");

// 当用户点击按钮时，触发事件处理程序
button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

---

## 6. 指定事件处理程序

可以通过 HTML 属性或 DOM 属性为元素指定事件处理程序。

### 示例代码

#### HTML 属性指定

```html
<!-- 使用 HTML 属性指定点击事件 -->
<button onclick="console.log('Button clicked!')">Click me</button>
```

#### DOM 属性指定

```javascript
// 获取按钮元素
const button = document.getElementById("myButton");

// 使用 DOM 属性指定事件处理程序
button.onclick = function () {
  console.log("Button clicked!");
};
```

---

## 7. 定时器

定时器可以用来延迟执行代码或周期性地运行代码。

### 示例代码

#### 延迟执行代码

```javascript
// 设置一个定时器，2秒后执行一次
setTimeout(function () {
  console.log("Hello, world!");
}, 2000);
```

#### 周期性执行代码

```javascript
// 设置一个定时器，每2秒重复执行
setInterval(function () {
  console.log("Hello, world!");
}, 2000);
```

## 1. 获取元素：以下哪个方法可以获取第一个类名为 "myClass" 的元素？
A. `getElementById("myClass")`  
B. `querySelector(".myClass")`  
C. `querySelectorAll(".myClass")[0]`  
D. B 和 C 都对  
**答案：D. B 和 C 都对**

---

## 2. 修改元素内容：以下哪个方法可以修改元素的文本内容？
A. `innerHTML`  
B. `textContent`  
C. `innerText`  
D. B 和 C 都对  
**答案：D. B 和 C 都对**

---

## 3. 属性操作：以下哪个方法可以获取元素的自定义属性值？
A. `getAttribute("data-custom")`  
B. `setAttribute("data-custom", "value")`  
C. `element["data-custom"]`  
D. `element.style`  
**答案：A. `getAttribute("data-custom")`**

---

## 4. 动态样式：以下哪个选项可以修改元素的字体大小？
A. `element.style.fontSize = "18px";`  
B. `element.fontSize = "18px";`  
C. `element.style["font-size"] = "18px";`  
D. A 和 C 都对  
**答案：D. A 和 C 都对**

---

## 5. DOM事件：以下哪个方法为元素添加事件处理程序？
A. `element.onclick = function() { ... };`  
B. `element.addEventListener("click", function() { ... });`  
C. `element.on("click", function() { ... });`  
D. A 和 B 都对  
**答案：D. A 和 B 都对**

---

## 6. 事件驱动：以下哪种事件会在鼠标移入元素时触发？
A. `click`  
B. `mouseover`  
C. `mouseenter`  
D. B 和 C 都对  
**答案：D. B 和 C 都对**

---

## 7. 定时器：以下哪个方法会在 3 秒后执行一次代码？
A. `setTimeout(function() { ... }, 3000);`  
B. `setInterval(function() { ... }, 3000);`  
C. `setDelay(function() { ... }, 3000);`  
D. `setTimeout(function() { ... }, 3000).repeat();`  
**答案：A. `setTimeout(function() { ... }, 3000);`**

---

## 8. HTML事件处理程序：以下哪个选项是 HTML 中指定点击事件处理程序的正确方式？
A. `<button onclick="console.log('clicked')">Click me</button>`  
B. `<button click="console.log('clicked')">Click me</button>`  
C. `<button onclick="handleClick()">Click me</button>`  
D. A 和 C 都对  
**答案：D. A 和 C 都对**

---

## 9. 获取所有元素：以下哪个方法可以返回所有类名为 "myClass" 的元素？
A. `getElementById("myClass")`  
B. `querySelectorAll(".myClass")`  
C. `getElementsByClassName("myClass")`  
D. B 和 C 都对  
**答案：D. B 和 C 都对**

---

## 10. 定时器清除：以下哪个方法可以用来停止一个周期性执行的定时器？
A. `clearInterval(intervalId)`  
B. `clearTimeout(timeoutId)`  
C. `stopInterval(intervalId)`  
D. A 和 B 都对  
**答案：A. `clearInterval(intervalId)`**


# 第6章：数组和字符串对象

## 1. 数组元素的读取
数组是 JavaScript 中的一种数据结构，用于存储有序的集合。可以通过索引来读取数组中的元素。

**示例**:  
```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
```

---

## 2. 数组的方法
数组对象拥有一系列方法，可以用来操作数组。以下是一些常用和高阶的方法：

### 2.1 `push()`
向数组的末尾添加一个或多个元素，并返回新的长度。

**示例**:  
```javascript
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### 2.2 `pop()`
删除数组的最后一个元素，并返回那个元素。

**示例**:  
```javascript
const fruits = ["apple", "banana", "cherry"];
const lastFruit = fruits.pop();
console.log(lastFruit); // "cherry"
console.log(fruits); // ["apple", "banana"]
```

### 2.3 `shift()`
删除数组的第一个元素，并返回那个元素。

**示例**:  
```javascript
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "cherry"]
```

### 2.4 `unshift()`
向数组的开头添加一个或多个元素，并返回新的长度。

**示例**:  
```javascript
const fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### 2.5 `slice()`
返回数组的一部分浅拷贝到一个新数组对象。

**示例**:  
```javascript
const fruits = ["apple", "banana", "cherry", "orange"];
const citrus = fruits.slice(2, 4);
console.log(citrus); // ["cherry", "orange"]
```

### 2.6 `splice()`
通过删除或替换现有元素或者原地添加新的元素来修改数组。

**示例**:  
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "orange");
console.log(fruits); // ["apple", "orange", "cherry"]
```

### 2.7 `map()`
创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后的返回值。

**示例**:  
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### 2.8 `filter()`
创建一个新数组，包含通过所提供函数实现的测试的所有元素。

**示例**:  
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### 2.9 `reduce()`
对数组中的每个元素执行一个由您提供的 reducer 函数（升序执行），将其结果汇总为单个返回值。

**示例**:  
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```



## 选择题

### 1. 数组的索引从哪里开始计数？  
A. 0  
B. 1  
C. -1  
D. 任意位置  

**答案**: A. 0  

---

### 2. 以下哪个方法可以向数组的末尾添加元素？  
A. `push()`  
B. `pop()`  
C. `unshift()`  
D. `slice()`  

**答案**: A. `push()`  

---

### 3. 以下哪个方法可以从数组中删除最后一个元素？  
A. `shift()`  
B. `pop()`  
C. `splice()`  
D. `slice()`  

**答案**: B. `pop()`  

---

### 4. 如果想获取数组的一部分浅拷贝，应该使用哪个方法？  
A. `splice()`  
B. `slice()`  
C. `map()`  
D. `filter()`  

**答案**: B. `slice()`  

---

### 5. 以下哪个方法会修改原数组？  
A. `map()`  
B. `filter()`  
C. `splice()`  
D. `reduce()`  

**答案**: C. `splice()`  

---

### 6. `map()` 方法的作用是什么？  
A. 对数组中的每个元素执行提供的函数，并返回一个新数组  
B. 筛选出符合条件的数组元素  
C. 累积数组中的值并返回单个结果  
D. 修改数组的长度  

**答案**: A. 对数组中的每个元素执行提供的函数，并返回一个新数组  

---

### 7. 下列方法中，哪个不会修改原数组？  
A. `pop()`  
B. `splice()`  
C. `slice()`  
D. `unshift()`  

**答案**: C. `slice()`  

---

### 8. 如果想筛选数组中的偶数元素，应该使用哪个方法？  
A. `map()`  
B. `filter()`  
C. `reduce()`  
D. `splice()`  

**答案**: B. `filter()`  

---

### 9. 以下代码的输出是什么？  
```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
```  
A. `6`  
B. `123`  
C. `0`  
D. `undefined`  

**答案**: A. `6`  

---

### 10. 下列哪个方法可以在数组开头添加元素？  
A. `push()`  
B. `unshift()`  
C. `splice()`  
D. `shift()`  

**答案**: B. `unshift()`  

n
# 第7章：字符串对象

## 1. 模版字符串
模版字符串是 ES6 引入的一种新的字符串字面量语法，它可以包含 placeholders，允许嵌入表达式。

### 示例:
```javascript
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // "Hello, my name is Alice and I am 25 years old."
```

---

## 2. 字符串方法

### (1) `charAt()`
返回指定位置的字符。
```javascript
const str = "Hello, world!";
console.log(str.charAt(7)); // "w"
```

### (2) `charCodeAt()`
返回在指定位置的字符的 Unicode 编码。
```javascript
const str = "Hello, world!";
console.log(str.charCodeAt(7)); // 119
```

### (3) `concat()`
连接两个或多个字符串，并返回新的字符串。
```javascript
const str1 = "Hello, ";
const str2 = "world!";
const str3 = str1.concat(str2);
console.log(str3); // "Hello, world!"
```

### (4) `includes()`
判断字符串是否包含指定的子字符串。
```javascript
const str = "Hello, world!";
console.log(str.includes("world")); // true
```

### (5) `indexOf()`
返回指定值在字符串中首次出现的位置。
```javascript
const str = "Hello, world!";
console.log(str.indexOf("world")); // 7
```

### (6) `lastIndexOf()`
返回指定值在字符串中最后一次出现的位置。
```javascript
const str = "Hello, world! World!";
console.log(str.lastIndexOf("world")); // 14
```

### (7) `match()`
使用正则表达式与字符串进行匹配。
```javascript
const str = "Hello, world!";
console.log(str.match(/world/)); 
// ["world", index: 7, input: "Hello, world!", groups: undefined]
```

### (8) `repeat()`
返回指定次数重复的字符串。
```javascript
const str = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"
```

### (9) `replace()`
在字符串中用某个字符串替换另一个字符串。
```javascript
const str = "Hello, world!";
console.log(str.replace("world", "everyone")); // "Hello, everyone!"
```

### (10) `search()`
对字符串进行查找，返回首次匹配的索引。
```javascript
const str = "Hello, world!";
console.log(str.search("world")); // 7
```

### (11) `slice()`
提取字符串的某个部分，并返回一个新的字符串。
```javascript
const str = "Hello, world!";
console.log(str.slice(7, 12)); // "world"
```

### (12) `split()`
把字符串分割成数组。
```javascript
const str = "Hello, world!";
console.log(str.split(" ")); // ["Hello,", "world!"]
```

### (13) `startsWith()`
判断字符串是否以指定的子字符串开头。
```javascript
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
```

### (14) `substring()`
返回字符串中介于两个指定下标之间的字符。
```javascript
const str = "Hello, world!";
console.log(str.substring(7, 12)); // "world"
```

### (15) `toLowerCase()`
将字符串转换为小写。
```javascript
const str = "Hello, world!";
console.log(str.toLowerCase()); // "hello, world!"
```

### (16) `toUpperCase()`
将字符串转换为大写。
```javascript
const str = "Hello, world!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

### (17) `trim()`
去除字符串两端的空白字符。
```javascript
const str = " Hello, world! ";
console.log(str.trim()); // "Hello, world!"
```

# 选择题

## 1. 模版字符串可以嵌入以下哪种内容？
A. HTML代码  
B. JavaScript表达式  
C. 变量  
D. 以上全部  

**答案**: D. 以上全部

---

## 2. 使用哪种方法可以判断字符串是否包含指定的子字符串？
A. `includes()`  
B. `match()`  
C. `indexOf()`  
D. `contains()`  

**答案**: A. `includes()`

---

## 3. 以下哪个方法可以用来提取字符串的某一部分？
A. `slice()`  
B. `substring()`  
C. `substr()`  
D. 以上全部  

**答案**: D. 以上全部

---

## 4. `charAt()` 方法的作用是什么？
A. 返回字符串的长度  
B. 替换字符串中的字符  
C. 返回指定位置的字符  
D. 将字符串转换为小写  

**答案**: C. 返回指定位置的字符

---

## 5. 以下哪个方法可以用于连接两个或多个字符串？
A. `concat()`  
B. `join()`  
C. `append()`  
D. `merge()`  

**答案**: A. `concat()`

---

## 6. 以下代码的输出是什么？
```javascript
const str = "Hello, world!";
console.log(str.charCodeAt(1));
```
A. 72  
B. 101  
C. 108  
D. 87  

**答案**: B. 101

---

## 7. `replace()` 方法的作用是什么？
A. 替换字符串中的字符或子字符串  
B. 删除字符串中的字符  
C. 分割字符串  
D. 查找字符串  

**答案**: A. 替换字符串中的字符或子字符串

---

## 8. 以下哪个方法可以将字符串重复多次？
A. `repeat()`  
B. `duplicate()`  
C. `times()`  
D. `clone()`  

**答案**: A. `repeat()`

---

## 9. 以下代码的输出是什么？
```javascript
const str = " Hello, world! ";
console.log(str.trim());
```
A. `" Hello, world!"`  
B. `"Hello, world! "`  
C. `" Hello, world! "`  
D. `"Hello, world!"`  

**答案**: D. `"Hello, world!"`

---

## 10. 以下代码的输出是什么？
```javascript
const str = "Hello, world!";
console.log(str.startsWith("Hello"));
```
A. `true`  
B. `false`  
C. `undefined`  
D. `Error`  

**答案**: A. `true`