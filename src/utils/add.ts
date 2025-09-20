// 1. 加法函式
// 函式名稱：add
// Input / Output：
// add(2, "5") → 7
// add("3", 3) → 6

type numType = number | string;

export const add = (a: numType, b: numType): number => {
  // 處理各種邊界情況
  const numA = Number(a);
  const numB = Number(b);

  // 檢查是否為有效數字
  if (isNaN(numA) || isNaN(numB)) {
    console.log("Invalid input: result is NaN");
    return NaN;
  }

  const result = numA + numB;

  return result;
};
