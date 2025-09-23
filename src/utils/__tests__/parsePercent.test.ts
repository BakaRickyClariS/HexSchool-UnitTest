import { describe, it, expect } from "vitest";
import { parsePercent } from "../parsePercent";

describe("parsePercent 函式", () => {
  it("能正確解析百分比字串", () => {
    expect(parsePercent("7%")).toBe(0.07);
    expect(parsePercent("12.5%")).toBe(0.125);
  });
});
