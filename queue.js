function Quene() {
  // 用数组来保存队列中的元素
  var items = [];

  // 添加新元素到队尾
  this.enqueue = function (element) {
    items.push(element);
  };

  // 移除队首的元素，并将其返回
  this.dequeue = function () {
    return items.shift();
  };

  // 仅返回队首元素，不做任何修改
  this.front = function () {
    return items[0];
  };

  // 判断队列是否为空，若空返回true，否则返回false
  this.isEmpty = function () {
    return items.length === 0;
  };

  // 返回栈中的元素个数
  this.size = function () {
    return items.length;
  };

  // 清空队列
  this.clear = function () {
    items = [];
  };

  // 将队列内元素输出到控制台
  this.print = function () {
    console.log(items.toString());
  };
}

// 优先队列实例（设置优先级，然后在正确的位置添加元素）（最小优先队列，优先值较小的放置在队列前面）
function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      // 若元素为空，则直接将其入列
      items.push(queueElement);
    } else {
      var added = false;

      for (var i = 0, l = items.length; i < l; i++) {
        if (queueElement.priority < items[i].priority) {
          // 若有元素优先值小于此项时，将元素插入到此前
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        // 如要添加的元素优先值大于所有现存元素，则将其添到队尾
        items.push(queueElement);
      }
    }
  };

  // 其他方法与Quene实现相同
}
