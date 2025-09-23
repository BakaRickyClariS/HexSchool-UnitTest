import { describe, it, expect } from "vitest";
import { createAsyncCalculator } from "../createAsyncCalculator";

describe("createAsyncCalculator 函式", () => {
  it("能正確計算", async () => {
    const c = new createAsyncCalculator(5);
    expect(await c.add(10).mul(2).value()).toBe(30);
  });
});
