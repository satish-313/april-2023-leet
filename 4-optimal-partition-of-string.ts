function partitionString(s: string): number {
    let noPatition = 0;
    let set = new Set<string>();

    for (let char of s) {
        if (!set.has(char)) {
            set.add(char);
        } else {
            noPatition += 1;
            set.clear();
            set.add(char)
        }
    }

    return noPatition + 1;
}


console.log(partitionString("abacabd")) // 4
// console.log(partitionString("ssssss")) // 6
