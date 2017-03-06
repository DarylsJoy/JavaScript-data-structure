function Stack() {
  // 用数组来保存栈中的元素
  var items = [];

  // 添加新元素到栈顶
  this.push = function (element) {
    items.push(element);
  };

  // 移除栈顶的元素，并将其返回
  this.pop = function () {
    return items.pop();
  };

  // 仅返回栈顶元素，不做任何修改
  this.peek = function () {
    return items[items.length - 1];
  };

  // 判断栈是否为空，若空返回true，否则返回false
  this.isEmpty = function () {
    return items.length === 0;
  };

  // 返回栈中的元素个数
  this.size = function () {
    return items.length;
  };

  // 清空栈
  this.clear = function () {
    items = [];
  };

  // 将栈内元素输出到控制台
  this.print = function () {
    console.log(items.toString());
  };
}


// 实例：十进制与二进制转换
function binaryConverter(decNumber) {
  var remStack = new Stack();
  var rem;
  var binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

// 实例：数字进制转换
function numBaseConverter(decNumber, base) {
  var remStack = new Stack();
  var rem;
  var baseString = '';
  var digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];    // 对10-15进行转换
  }

  return baseString;
}
