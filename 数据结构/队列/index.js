// 入队是在末尾插入新元素，出队是删除队头的元素
// 队列
function Queue() {
  // 这里是属性和方法
  var items = [];

  // 添加
  this.enqueue = function(element) {
    items.push(element);
  }

  // 移除
  this.dequeue = function() {
    // JavaScript的array类的shift方法。
    // shift方法会从数组中移除存储在索引0(第一个位置)的元素
    return items.shift();
  }

  // 返回最前面项
  this.front = function(){
    return items[0];
  }

  // 检查队列是否为空
  this.isEmpty = function() {
    return items.length == 0;
  }

  // 队列长度
  this.size = function(){
    return items.length;
  }

  // 打印
  this.print = function(){
      console.log(items.toString())
  }
}
// 优先级队列
function PriorityQueue() {
  // 这里是属性和方法
  var items = [];

  function QueueElement (element, priority) {
    this.element = element;  // 元素
    this.priority = priority; // 数值越大、优先级越低
  }

  // 添加
  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) { // 如果队列为空
      items.push(queueElement);   // 直接把元素添加到队列
    } else {  // 否则，对比该元素与队列里其他元素的优先级
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {  // 当找到一个比要添加的元素的priority值更大的项时，就把新元素插入 到它之前
          items.splice(i, 0, queueElement); // Javascript方法splice(): 向/从数组中添加/删除项目
          added = true; // 已添加
          break;  // 结束
        }        
      }
      if (!added) { // 如果没有添加(说明元素的priority值大于队列里任何已有元素)
        items.push(queueElement)  // 直接添加到队列的末尾
      }
    }
  }

  // 移除
  this.dequeue = function () {
    // JavaScript的array类的shift方法。
    // shift方法会从数组中移除存储在索引0(第一个位置)的元素
    return items.shift();
  }

  // 返回最前面项
  this.front = function () {
    return items[0];
  }

  // 检查队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  }

  // 队列长度
  this.size = function () {
    return items.length;
  }

  // 打印
  this.print = function () {
    console.log(items.toString())
  }
}
// 循环队列
function hotPotato (nameList, num) {
  var queue = new Queue();

  // 用for循环把所有Name添加进队列里
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';
  while(queue.size() > 1) {// 队列长度大于1的时候进入，否则剩下的1个人就直接返回
    // 从队列开头移除一项，再将其添加到队列末尾
    for (var i=0; i<num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 一旦传递次数达到给定的数字, 从队列中移除
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }
  return queue.dequeue();
}

// enqueue(): 向队列尾部添加一个(或多个)新的项
// dequeue(): 移除队列第一项，并返回被移除的元素
// front(): 返回队列中的第一个元素-最先被添加，也将是最先被移除的元素。队列不做任何变动(不移除元素，只返回元素信息——与Stack类的peek方法非常类似) 。
// isEmpty(): 如果队列中不包含任何元素，返回true，否则返回false。
// size(): 返回队列包含的元素个数，与数组的length属性类似。

(function() {
  // 队列测试数据
  var queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue('test1');
  queue.enqueue('test2');
  queue.enqueue('test3');
  queue.dequeue();
  queue.print();
  console.log(queue.size());

  // 循环队列测试数据
  var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']; 
  var winner = hotPotato(names, 11); 
  console.log('胜利者:' + winner);
})()