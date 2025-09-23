// 7.重做下一步
// 依照上題目，做重做下一步
// 函式名稱：createRedoableCalculator
// input

// const c = createRedoableCalculator(10);
// c.add(5).mul(2).undo().redo().value();

// // 30
//
export class createRedoableCalculator {
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
