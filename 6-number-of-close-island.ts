function dfs(g: number[][], row: number, col: number): boolean {
    let isNotClose: boolean = true;

    type pair = [number, number];

    let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    let stack: pair[] = [[row, col]];

    while (stack.length > 0) {
        let [r, c] = stack.pop()!;

        if (r === 0 || r === g.length - 1) isNotClose = false;
        if (c === 0 || c === g[0].length - 1) isNotClose = false;
        g[r][c] = 2;

        for (let [i, j] of dir) {
            let ri = r + i;
            let cj = c + j;

            if (ri < 0 || ri > g.length - 1 || cj < 0 || cj > g[0].length - 1) continue;
            if (g[ri][cj] === 0) stack.push([ri, cj])
        }
    }

    return isNotClose;
}


function closedIsland(grid: number[][]): number {
    let closeIsland: number = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0 && dfs(grid, i, j)) closeIsland += 1;
        }
    }

    return closeIsland;
};

console.log(closedIsland([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]])) // 2
console.log(closedIsland([[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]]))
console.log(closedIsland([[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]]))