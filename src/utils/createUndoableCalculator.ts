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

export class createUndoableCalculator {
  private result: number;
  private stepIndex: number;
  private stepList: number[];

  constructor(parameters: number) {
    this.result = parameters;
    this.stepIndex = 0;
    this.stepList = [parameters];
  }

  private record(newValue: number) {
    this.stepList = this.stepList.slice(0, this.stepIndex + 1);
    this.result = newValue;
    this.stepList.push(newValue);
    this.stepIndex++;
  }

  add(p: number) {
    this.record(this.result + p);
    return this;
  }

  sub(p: number) {
    this.record(this.result - p);
    return this;
  }

  mul(p: number) {
    this.record(this.result * p);
    return this;
  }

  div(p: number) {
    this.record(this.result / p);
    return this;
  }

  undo() {
    if (this.stepIndex > 0) {
      this.stepIndex--;
      this.result = this.stepList[this.stepIndex];
    }
    return this;
  }

  redo() {
    if (this.stepIndex < this.stepList.length - 1) {
      this.stepIndex++;
      this.result = this.stepList[this.stepIndex];
    }
    return this;
  }

  value() {
    return this.result;
  }
}
