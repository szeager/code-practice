// 链表
function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null;

  // 末尾追加元素
  this.append = function (element) {
    var node = new Node(element), current;

    // 列表中的第一个节点
    if (head === null) head = node;
    else {
      current = head;
      // 循环列表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项，将其next赋值为node, 建立连接
      current.next = node;
    }

    length++; // 更新列表的长度
  };

  // 插入
  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) { // 在第一个位置添加
        if (!head) {  // 新增的(如果列表为 空，只需要把head和tail都指向这个新节点。)
          head = node;
          tail = node;
        } else {  // 如果不为空，current变量将是对列表 中第一个元素的引用
          node.next = current;  // 把node.next设为current
          current.prev = node; // 新增的 (current.prev指针将由指向null变为指向新元素)
          head = node;  // head将指向 node(它将成为列表中的第一个元素)
          // node.prev指 针已经是null，因此不需要再更新任何东西
        }
      } else if (position === length) { // 最后一项(假如我们要在列表最后添加一个新元素)
        current = tail; // current变量将引用最后一个元素
        current.next = node;  // current.next指针(指向null)将指向node,(由于构造函数，node.next已经指向了null)
        node.prev = current; // node.prev将引用current
        tail = node;  // 更新tail，它将由指 向current变为指向node
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;  // 新增的
        node.prev = previous; // 新增的
      }
      length++; // 更新列表的长度

      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function (position) { };
  this.remove = function (element) { };
  this.indexOf = function (element) { };
  this.isEmpty = function () { };
  this.size = function () { };
  this.toString = function () { };
  this.print = function () {

  };
}
// append(element): 向列表尾部添加一个新的项。
// insert(position, element): 向列表的特定位置插入一个新的项。
// remove(element): 从列表中移除一项。
// indexOf(element): 返回元素在列表中的索引。如果列表中没有该元素则返回 - 1。
// removeAt(position): 从列表的特定位置移除一项。
// isEmpty(): 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。  size(): 返回链表包含的元素个数。与数组的length属性类似。 toString(): 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。

(function () {
  var list = new LinkedList();
  list.append(15);
  list.append(10);
  list.print();
})()