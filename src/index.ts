const findMax = (numbers: number[]): string => {
    if (numbers.length === 0) {
    return "No numbers ";
}
    const maxNumber = Math.max(...numbers);
    return maxNumber.toString();
};

const result = findMax([1, 2, 3, 4, 5]);
console.log(result,'type of result',typeof result); // Output: "5"