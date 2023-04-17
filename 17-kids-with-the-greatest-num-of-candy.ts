function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = new Array(candies.length).fill(false);

    let max = Math.max(...candies)

    for (let i=0; i<candies.length; i++) {
        if (candies[i] + extraCandies >= max) res[i] = true
    }

    return res;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
