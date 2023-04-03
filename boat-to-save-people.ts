function numRescueBoats(people:number[],limit:number) : number {
    people.sort((a:number,b:number) => a - b);
    
    let boats = 0;
    let r = people.length - 1;
    let l = 0;

    while ( l <= r ) {
        let w = l != r ?  people[l] + people[r]: people[l];

        if ( w <= limit ) {
            boats += 1;
            l = l + 1;
            r = r - 1;
        } else {
            boats += 1;
            r = r - 1;
        }
        
    }
    return boats;
}

console.log(numRescueBoats([1,2],3)) // 1
console.log(numRescueBoats([3,2,2,1],3)) // 3
console.log(numRescueBoats([3,5,3,4],4)) // 5
