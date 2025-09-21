import { describe, it, expect } from "vitest";
import { createRedoableCalculator } from "../createRedoableCalculator";

describe("createRedoableCalculator 函式", () => {
  it("能正確計算", () => {
    const c = new createRedoableCalculator(10);
    expect(c.add(5).mul(2).undo().redo().value()).toBe(30);
  });
});
