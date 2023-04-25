class SmallestInfiniteSet {
    set = new Set<number>();
    min = 1;
    constructor() {}

    popSmallest(): number {
        let m: number = 0;

        for (let k of this.set) {
            m = Math.min(k, this.min, m != 0 ? m : k + 1);
        }
        this.set.delete(m);
        return m === 0 ? this.min++ : m;
    }

    addBack(num: number): void {
        // console.log(this.min)
        if (num < this.min && !this.set.has(num)) this.set.add(num);
        console.log(this.set);
    }
}

const obj = new SmallestInfiniteSet();
console.log(obj.popSmallest());
obj.addBack(1);
console.log(obj.popSmallest());
console.log(obj.popSmallest());
console.log(obj.popSmallest());
obj.addBack(2);
obj.addBack(3);
console.log(obj.popSmallest());
console.log(obj.popSmallest());
