import { describe, it, expect } from "vitest";
import { createUndoableCalculator } from "../createUndoableCalculator";

describe("createUndoableCalculator 函式", () => {
  it("能正確計算", () => {
    const c = new createUndoableCalculator(10);
    expect(c.add(5).mul(2).undo().sub(3).value()).toBe(12);

    const d = new createUndoableCalculator(2);
    expect(d.mul(5).div(2).add(4).undo().undo().mul(3).value()).toBe(30);
  });
});
