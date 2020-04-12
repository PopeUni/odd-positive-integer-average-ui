// Common utility functions shared between both CLI and GUI should go here...


/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {

    const oddPosNumberArray: number[] = input.filter(positivenumber =>(positivenumber > 0 && positivenumber % 2 != 0 ));
    const total: number = oddPosNumberArray.reduce((accumulator,currentValue) => accumulator + currentValue);
    const Average = total/oddPosNumberArray.length;
  
    return Average;
  }