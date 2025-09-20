// 2. 安全除法
// 函式名稱：safeDivide
// Input / Output：
// safeDivide(7, 2) → 3.5
// safeDivide(10, 0) → null

type numType = number | string;
type resultType = number | null;

export const safeDivide = (a: numType, b: numType): resultType => {
  const numA = Number(a);
  const numB = Number(b);
  console.log(numA && numB ? numA / numB : null);
  return numA && numB ? numA / numB : null;
};
