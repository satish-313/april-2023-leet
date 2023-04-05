function minimizeArrayValue(nums:number[]):number {
    let ans = 0;
    let preSum = 0;

    for (let i=0; i<nums.length; i++) {
        preSum += nums[i];
        ans = Math.max(ans, Math.ceil(preSum / (i+1)));
    }

    return ans;
};


console.log(minimizeArrayValue([3,7,1,6])) // 5
console.log(minimizeArrayValue([10,1])) // 10
