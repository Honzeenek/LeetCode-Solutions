function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const transformed = fn(element, i);
        newArray.push(transformed)
    }

    return newArray;
};