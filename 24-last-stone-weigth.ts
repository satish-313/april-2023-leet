function lastStoneWeight(stones: number[]): number {
    if (stones.length === 1) return stones[0];

    stones.sort((a, b) => a - b);

    while (stones && stones.length > 1) {
        let last1 = stones.pop()!;
        let last2 = stones.pop()!;

        if (last1 !== last2) {
            let rem = Math.abs(last1 - last2);
            stones.push(rem);
            stones.sort((a, b) => a - b);
        }
    }

    return stones.length === 1 ? stones[0] : 0;
}

console.log(lastStoneWeight([2, 2]));
