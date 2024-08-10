import { error } from "console";

export const Add = (words: string): number => {
  const negativeNumbers: number[] = [];
  const numberArr: number[] = words
    .replaceAll("\n", ",")
    .replaceAll(";", ",")
    .split(",")
    .map((num:string) => {
      if (Number(num) < 0) {
        negativeNumbers.push(Number(num));
      }
      return Number(num) >= 0 ? Number(num) : 0;
    });
  if (negativeNumbers.length > 0) {
    throw new Error(
      "Negative numbers not allowed " + negativeNumbers.join(",")
    );
  }
  const sum: number = numberArr.reduce((acc = 0, num:number) => {
    return acc + num;
  });

  return sum;
};
