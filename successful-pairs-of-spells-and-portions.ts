function findSuccess(portion: number[], target: number, n: number): number {
    let len = portion.length - 1;
    let l = 0;
    let r = len;
    let mid: number = 0;

    if (portion[l] * n >= target) return len;
    if (portion[r] * n < target) return 0;

    while (l <= r) {
        mid = (l + r) >> 1;

        let midValue = portion[mid] * n;
        if (midValue < target && portion[mid + 1] * n >= target) return len - mid;
        else if (midValue >= target && portion[mid + 1] * n >= target) r = mid - 1;
        else l = mid + 1;
    }

    return 0;
}

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const output: number[] = [];

    potions.sort((a, b) => a - b)

    for (let num of spells) {
        output.push(findSuccess(potions, success, num))
    }

    return output;
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)) // [4,0,3]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)) // [2,0,2]
