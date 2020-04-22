export function averageOddPositiveIntegers(input: number[]): number {
  var Average = 1;
  const oddPosNumberArray: number[] = input.filter(
    (positivenumber) => positivenumber > 0 && positivenumber % 2 != 0
  );

  if (oddPosNumberArray.length == 0) {
    Average = 0; //if length is zero than no odd positive numbers in the array
  } else {
    const total: number = oddPosNumberArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    Average = total / oddPosNumberArray.length;
  }
  return Average;
}
