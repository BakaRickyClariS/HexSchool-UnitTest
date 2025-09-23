// 計算機題目
// 1. 加法函式
// 函式名稱：add
// Input / Output：
// add(2, "5") → 7
// add("3", 3) → 6
const add = (a, b) => console.log(parseFloat(a) + parseFloat(b));

add(2, "5");
add("3", 3);
// 解題過程 :
// 搜尋轉換字串為數字的函式
// parseFloat為轉換數字的其中一個方法 他也可以接受小數點的數字 因此使用這個
// -------------------------------------------------------------------

// 2. 安全除法
// 函式名稱：safeDivide
// Input / Output：
// safeDivide(7, 2) → 3.5
// safeDivide(10, 0) → null
const safeDivide = (a, b) => (a && b ? console.log(a / b) : console.log(null));

safeDivide(7, 2);
safeDivide(10, 0);
// 解題過程 :
// 利用三源運算子判斷a與b都不為空值時做除法，其餘為null
// -------------------------------------------------------------------

// 3. 四捨五入
// 函式名稱：roundTo
// Input / Output：
// roundTo(1.005, 2) → 1.01
// roundTo(123.4567, 3) → 123.457
const roundTo = (a, b) => {
  const powNum = Math.pow(10, b);
  console.log((Math.round((a + Number.EPSILON) * powNum) / powNum).toFixed(b));
};
roundTo(1.005, 2);
roundTo(123.4567, 3);
// 解題過程 :
// 一開始想到的是toFixed這個方法 但這題需要四捨五入 所以要先用round這個方法來進位
// 再用toFixed來取小數點 但這時遇到了一個問題 怎麼執行第一個的答案都會是1.00 而不是預期的1.01
// 後來問了AI才發現這是由於JS會有所謂的浮點數精度問題 因此要用Number.EPSILON這個方法來新增那個誤差值解決這個狀況 才終於解決了這題
// -------------------------------------------------------------------

// 4. 解析百分比
// 函式名稱：parsePercent
// Input / Output：
// parsePercent("7%") → 0.07
// parsePercent("12.5%") → 0.125
const parsePercent = (a) => {
  console.log(parseFloat(a.split("%")[0]) / 100);
};
parsePercent("7%");
parsePercent("12.5%");
// 解題過程 :
// 利用split來切割特定字元"%" 再來選擇陣列中的第一個元素數字進行數字轉換
// 最後再除以100
// -------------------------------------------------------------------

// 5. n 次方根
// 函式名稱：nthRoot
// Input / Output：
// nthRoot(27, 3) → 3
// nthRoot(16, 4) → 2
const nthRoot = (a, b) => console.log(Math.pow(a, 1 / b));
nthRoot(27, 3);
nthRoot(16, 4);
// 解題過程 :
// 上面寫過的Math.pow也可以拿來做次方根 只要將第二個數字取倒數就好了
// -------------------------------------------------------------------

// 6.還原上一步（可復原計算器）
// 函式名稱：createUndoableCalculator
// 說明：
// 回傳一個可鏈式操作的物件，支援 .add(n) .sub(n) .mul(n) .div(n) .undo() .value()
// .undo()：還原上一個成功的運算（可連續多次），若無可還原則維持現狀。
// 所有運算皆回傳物件本身以便鏈式呼叫；.value() 回傳目前數值。
// 例如：
// const c = createUndoableCalculator(10);
// c.add(5).mul(2).undo().sub(3).value();

// // 12
// ​
// const c = createUndoableCalculator(2);
// c.mul(5).div(2).add(4).undo().undo().mul(3).value();

// // 30
// ​

class createUndoableCalculator {
  constructor(parameters) {
    this.parameters = parameters;
    this.result = 0;
    this.stepNum = 0;
    this.stepList = [];
  }
  add(p) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result + p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  sub(p) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result - p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  mul(p) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result * p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  div(p) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result / p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  undo() {
    if (this.stepNum > 0) {
      this.result = this.stepList[this.stepNum - 2];
      this.stepNum--;
    }
    console.log(this.result);
    return this;
  }
  value() {
    console.log(this.result);
    return this;
  }
}
console.log("第七題");
// const c = new createUndoableCalculator(10);
// c.add(5).mul(2).undo().sub(3).value();

// // 12
// ​
const c = new createUndoableCalculator(2);
c.mul(5).div(2).add(4).undo().undo().mul(3).value();

// -------------------------------------------------------------------

// 7.重做下一步
// 依照上題目，做重做下一步
// 函式名稱：createRedoableCalculator
// input

// const c = createRedoableCalculator(10);
// c.add(5).mul(2).undo().redo().value();

// // 30
// ​

// 8.：異步延遲計算器
// 函式名稱：createAsyncCalculator
// 所有操作回傳 Promise，需用 await 拿值。
// input

// const c = createAsyncCalculator(5);
// await c.add(10).mul(2).value();

// output

// 30
