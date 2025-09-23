// 4. 解析百分比
// 函式名稱：parsePercent
// Input / Output：
// parsePercent("7%") → 0.07
// parsePercent("12.5%") → 0.125
export const parsePercent = (a: string): number => {
  const result = parseFloat(a.split("%")[0]) / 100;
  return result;
};
