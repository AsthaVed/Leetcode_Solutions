/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
function minOperations(nums, x) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    const target = total - x;

    // We need to remove the whole array
    // if target is 0.
    if (target === 0) {
        return nums.length;
    }

    // Impossible if target is negative
    if (target < 0) {
        return -1;
    }

    let left = 0;
    let sum = 0;
    let maxLength = -1;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Shrink window if sum becomes too large
        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        // Found a subarray with required sum
        if (sum === target) {
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }
    }

    return maxLength === -1
        ? -1
        : nums.length - maxLength;
}