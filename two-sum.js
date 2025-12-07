//ques 4 -two sums
//given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target
//input: nums = [2,7,11,15],target = 9
//output : [0,1] (because nums[0]+nums[1]==9,we return [0,1])
//input:nums = [3,2,4],target = 6
//output : [1,2]
//brute force solution
const twoSum = function (nums,target){
    for(let i = 0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++ ){
            //logic
            if(nums[i]+nums[j]== target) return [i,j];
                
        }
    }
};
console.log(twoSum([2,7,11,15],13));
//[3,2,4] => 3+2,3+4,2+4 => 7,7,6
//[2,7,11,15]

//using objects
