import { describe, it, expect } from "vitest";
import { roundTo } from "../roundTo";

describe("roundTo 函式", () => {
  it("能正確四捨五入數字與字串", () => {
    expect(roundTo(1.005, 2)).toBe(1.01);
    expect(roundTo(123.4567, 3)).toBe(123.457);
  });
});
