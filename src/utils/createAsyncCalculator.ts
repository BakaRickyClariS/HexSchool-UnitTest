// 8.：異步延遲計算器
// 函式名稱：createAsyncCalculator
// 所有操作回傳 Promise，需用 await 拿值。
// input

// const c = createAsyncCalculator(5);
// await c.add(10).mul(2).value();

// output

// 30

export class createAsyncCalculator {
  private chain: Promise<number>;
  private result: number;
  private stepIndex: number;
  private stepList: number[];

  constructor(parameters: number) {
    this.result = parameters;
    this.stepIndex = 0;
    this.stepList = [parameters];
    this.chain = Promise.resolve(parameters);
  }

  private record(fn: (v: number) => number) {
    this.chain = this.chain.then((prev) => {
      const newValue = fn(prev);

      this.stepList = this.stepList.slice(0, this.stepIndex + 1);

      this.result = newValue;
      this.stepList.push(newValue);
      this.stepIndex++;
      return newValue;
    });
  }

  add(p: number) {
    this.record((v) => v + p);
    return this;
  }
  sub(p: number) {
    this.record((v) => v - p);
    return this;
  }
  mul(p: number) {
    this.record((v) => v * p);
    return this;
  }
  div(p: number) {
    this.record((v) => v / p);
    return this;
  }

  undo() {
    this.chain = this.chain.then(() => {
      if (this.stepIndex > 0) {
        this.stepIndex--;
        this.result = this.stepList[this.stepIndex];
      }
      return this.result;
    });
    return this;
  }

  redo() {
    this.chain = this.chain.then(() => {
      if (this.stepIndex < this.stepList.length - 1) {
        this.stepIndex++;
        this.result = this.stepList[this.stepIndex];
      }
      return this.result;
    });
    return this;
  }

  value() {
    return this.chain;
  }
}
