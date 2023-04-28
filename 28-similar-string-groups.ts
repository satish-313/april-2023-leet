function dfs(strs: string[]): number {
    const n = strs.length;
    const map = new Map<number, number[]>();
    const visit: boolean[] = new Array(n).fill(false);
    const stack: number[] = [];
    let groups = 0;

    function isSimilar(a: string, b: string) {
        let diff = 0;

        for (let k = 0; k < a.length; k++) {
            if (a.charCodeAt(k) !== b.charCodeAt(k)) diff += 1;
        }

        return diff === 0 || diff === 2;
    }

    for (let i = 0; i < n; i++) {
        map.set(i, new Array());
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                map.set(i, [...map.get(i)!, j]);
                map.set(j, [...map.get(j)!, i]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visit[i]) {
            visit[i] = true;
            groups += 1;
            stack.push(i);

            while (stack.length > 0) {
                let adj = map.get(stack.pop()!)!;

                for (let node of adj) {
                    if (!visit[node]) {
                        stack.push(node);
                        visit[node] = true;
                    }
                }
            }
        }
    }

    console.log(map);

    return groups;
}

console.log(dfs(["tars", "rats", "arts", "star"]));
console.log(dfs(["blw", "bwl", "wlb"]));
