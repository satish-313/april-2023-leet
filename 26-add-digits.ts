function addDigits(num: number): number {
    while (num >= 10) {
        let n = 0;
        while (num) {
            n += num % 10;
            num = Math.floor(num / 10);
        }
        num = n;
    }

    return num;
}

function addDigitsgood(num: number): number {
    if (num === 0) return 0;
    if (num % 9 === 0) return 9;
    return num % 9;
}
