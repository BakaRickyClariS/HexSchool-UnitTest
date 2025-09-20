import { describe, it, expect } from "vitest";
import { safeDivide } from "../safeDivide";

describe("safeDivide 函式", () => {
  it("能正確相除數字與字串", () => {
    expect(safeDivide(7, 2)).toBe(3.5);
    expect(safeDivide(10, 0)).toBe(null);
  });
});
