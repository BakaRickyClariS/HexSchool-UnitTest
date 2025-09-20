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
//
// const c = createUndoableCalculator(2);
// c.mul(5).div(2).add(4).undo().undo().mul(3).value();

// // 30
//

class createUndoableCalculator {
  private parameters: number;
  private result: number = 0;
  private stepNum: number = 0;
  private stepList: number[] = [];
  constructor(parameters: number) {
    this.parameters = parameters;
    this.result = 0;
    this.stepNum = 0;
    this.stepList = [];
  }
  add(p: number) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result + p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  sub(p: number) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result - p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  mul(p: number) {
    if (this.result === 0) {
      this.result = this.parameters;
    }
    this.result = this.result * p;
    this.stepNum++;
    this.stepList.push(this.result);
    console.log(this.result);
    return this;
  }
  div(p: number) {
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
//
const c = new createUndoableCalculator(2);
c.mul(5).div(2).add(4).undo().undo().mul(3).value();
