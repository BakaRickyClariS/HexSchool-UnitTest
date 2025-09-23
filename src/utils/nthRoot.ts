// 5. n 次方根
// 函式名稱：nthRoot
// Input / Output：
// nthRoot(27, 3) → 3
// nthRoot(16, 4) → 2

type numType = number | string;

export const nthRoot = (a: numType, b: numType) => {
  const numA = Number(a);
  const numB = Number(b);
  const result = Math.pow(numA, 1 / numB);
  return result;
};
