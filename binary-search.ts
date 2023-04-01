function search(nums:number[],target:number):number {
    let l = 0;
    let r = nums.length - 1;
    let mid = 0;

    while (l<=r) {
        mid = (l+r) >> 1;

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) r = mid - 1;
        else l = mid + 1;
    }

    return -1;
}


console.log(search([-1,0,3,5,9,12],9)) // 4
console.log(search([-1,0,3,5,9,12],2)) // -1


