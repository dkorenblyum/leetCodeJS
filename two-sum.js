/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {},
        neededValue,
        result = [];

    for (var i = 0 ; i < nums.length ; i++){
        neededValue = target - nums[i];

        if(nums[i] in map){
            result.push(map[nums[i]]);
            result.push(i);
            break;
        }else{
            map[neededValue] = i;
        }
    }

    return result;
};
