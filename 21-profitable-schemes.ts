function fprofitableSchemes(
    n: number,
    mp: number,
    g: number[],
    p: number[]
): number {
    const modulo = 1e9 + 7;
    let noOfSchemes = 0;
    let memo: number[][][] = new Array(3)
        .fill(null)
        .map(() => new Array(3).fill(null).map(() => new Array(3).fill(-1)));

    function rec(idx: number, c: number[]): void {
        // console.log(n, mp);
        if (mp <= 0 && n >= 0) {
            noOfSchemes += 1;
            console.log(c);
            // return;
        }

        if (n < 0) return;

        for (let i = idx; i < p.length; i++) {
            mp -= p[i];
            n -= g[i];
            c.push(i);
            rec(i + 1, c);
            mp += p[i];
            n += g[i];
            c.pop();
        }
    }

    rec(0, []);

    return noOfSchemes;
}

function profitableSchemes(
    n: number,
    minProfit: number,
    group: number[],
    profits: number[]
): number {
    const mod = 1e9 + 7;
    const dp: number[][][] = new Array(101)
        .fill(null)
        .map(() => new Array(101).fill(null).map(() => new Array(101).fill(0)));

    for (let c = 0; c <= n; c++) {
        dp[group.length][c][minProfit] = 1;
    }

    for (let index = group.length - 1; index >= 0; index--) {
        for (let count = 0; count <= n; count++) {
            for (let profit = 0; profit <= minProfit; profit++) {
                dp[index][count][profit] = dp[index + 1][count][profit];

                if (count + group[index] <= n) {
                    dp[index][count][profit] =
                        (dp[index][count][profit] +
                            dp[index + 1][count + group[index]][
                                Math.min(minProfit, profit + profits[index])
                            ]) %
                        mod;
                }
            }
        }
    }
    return dp[0][0][0];
}

console.log(profitableSchemes(5, 3, [2, 2], [2, 3])); // 2
// console.log(profitableSchemes(10, 5, [1, 2, 3, 5], [5, 6, 7, 8])); // 7
