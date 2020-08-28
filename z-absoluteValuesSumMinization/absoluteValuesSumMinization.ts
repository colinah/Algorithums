function absoluteValuesSumMinimization(a: number[]): number {
    let iseven: number = 0;
    if(a.length%2 === 0) iseven = 1;
    return a[Math.floor(a.length/2) - iseven];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));