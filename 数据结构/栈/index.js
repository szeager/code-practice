// 栈是一种遵从后进先出(LIFO)原则的有序集合。

// 栈
function Stack() {
    // 各种属性和方法的声明

    var items = [];

    // 添加
    this.push = function(element) {
      items.push(element);
    }

    // 移除
    this.pop = function() {
      return items.pop();
    }

    // 返回栈顶项
    this.peek = function() {
      return items[items.length - 1];
    }

    // 是否为空
    this.isEmpty = function() {
      return items.length == 0;
    }

    // 长度
    this.size = function () {
      return items.length;
    }

    // 清空
    this.clear = function () {
      items = [];
    }

    // 打印
    this.print = function() {
      console.log(items.toString());
    }

}

function baseConverter(decNumber,base) {
    var remStatck = new Stack(),
    rem,baseString = '',
    digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    
    while (decNumber > 0) { // 当结果满足和 base 做整除的条件时
      rem = Math.floor(decNumber % base); // base的余数
      remStatck.push(rem);  // 放到栈里
      decNumber = Math.floor(decNumber / base); // 让结果和2做整除
    }

    while (!remStatck.isEmpty()) {  // 把出栈的元素变成连接成字符串
      baseString += digits[remStatck.pop()];
    }
    return baseString;
}
// push(): 添加一个(或几个)新元素到栈顶。
// pop(): 移除栈顶的元素，同时返回被移除的元素。
// peek(): 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它) 。
// isEmpty(): 如果栈里没有任何元素就返回true，否则返回false。
// clear(): 移除栈里的所有元素。
// size(): 返回栈里的元素个数。这个方法和数组的length属性很类似。

(function (){
  //  栈测试数据
  var stack = new Stack();
  console.log(stack.isEmpty());

  stack.push('test1');
  stack.push('test2');
  stack.push('test3');
  console.log(stack.size()); 
  console.log(stack.isEmpty()); 
  console.log(stack.peek());
  stack.pop();
  console.log(stack.size());
  stack.print();

  // 栈 进制转换测试数据
  console.log(baseConverter(123, 2)); //输出11000011111111001 
  console.log(baseConverter(100345, 2)); //输出11000011111111001
  console.log(baseConverter(100345, 8)); //输出303771 
  console.log(baseConverter(100345, 16)); //输出187F9
})()