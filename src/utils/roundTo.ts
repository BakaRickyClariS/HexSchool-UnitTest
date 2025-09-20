// 3. 四捨五入
// 函式名稱：roundTo
// Input / Output：
// roundTo(1.005, 2) → 1.01
// roundTo(123.4567, 3) → 123.457

type numType = number | string;

const roundTo = (a: numType, b: numType): number => {
  const numA = Number(a);
  const numB = Number(b);
  const powNum = Math.pow(10, numB);
  const result = (
    Math.round((numA + Number.EPSILON) * powNum) / powNum
  ).toFixed(numB);
  console.log(result);
  return result;
};
roundTo(1.005, 2);
roundTo(123.4567, 3);
