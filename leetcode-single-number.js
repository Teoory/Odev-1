/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length===1) {
        return nums[0] }

    let sonuc = 0
    nums.forEach(element => {
        sonuc = sonuc ^ element
    });

    return sonuc;
};
