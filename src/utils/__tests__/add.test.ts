import { describe, it, expect } from "vitest";
import { add } from "../add"; // 往上一層找 add.ts

describe("add 函式", () => {
  it("能正確相加數字與字串", () => {
    expect(add(2, "5")).toBe(7);
    expect(add("3", 3)).toBe(6);
  });

  it("能處理負數與小數", () => {
    expect(add(-2, "2.5")).toBe(0.5);
  });

  it("無效輸入應回傳 NaN", () => {
    expect(add("abc", 5)).toBeNaN();
  });
});
