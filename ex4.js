function Index(nums, target)
{
    let res = []
    for (let i = 0; i < nums.length; i++) 
    {
        let pair = []
        for (let j = i; j < nums.length; j++) 
        {
            if((nums[i] + nums[j]) == target)
            {
                pair.push(i);
                pair.push(j);
            }
        }    
        if(pair.length != 0)
            res.push(pair)    
    }
    return res;
}

nums = [2,7,11,15,-6];
target = 9;
console.log(Index(nums, target))