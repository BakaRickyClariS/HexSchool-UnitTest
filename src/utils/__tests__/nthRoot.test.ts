import { describe, it, expect } from "vitest";
import { nthRoot } from "../nthRoot";

describe("nthRoot 函式", () => {
  it("能正確計算 n 次方根", () => {
    expect(nthRoot(27, 3)).toBe(3);
    expect(nthRoot(16, 4)).toBe(2);
  });
});
