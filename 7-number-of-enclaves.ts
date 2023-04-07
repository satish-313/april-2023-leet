const dir: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

function dfs(g: number[][], row: number, col: number): number {
    let cells = 0;
    let isBorder = false;

    let stack: [number, number][] = [[row, col]];

    g[row][col] = 0;

    while (stack.length > 0) {
        let [r, c] = stack.pop()!;
        cells += 1;

        if (r === 0 || c === 0 || r === g.length - 1 || c === g[0].length - 1)
            isBorder = true;

        for (let [i, j] of dir) {
            let ri = r + i;
            let cj = c + j;

            if (ri < 0 || ri > g.length - 1 || cj < 0 || cj > g[0].length - 1)
                continue;
            if (g[ri][cj] === 1) {
                stack.push([ri, cj]);
                g[ri][cj] = 0;
            }
        }
    }

    return isBorder ? 0 : cells;
}

function numEnclaves(grid: number[][]): number {
    let closeCell = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) closeCell += dfs(grid, i, j);
        }
    }

    return closeCell;
}

// console.log(numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])) // 3
// console.log(numEnclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]])) // 0

console.log(
    numEnclaves([
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0],
    ])
);
