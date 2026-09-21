/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const nums = [1,2,3,4], k=5
var resultArray = function(nums, k) {
      const result = new Array(k).fill(0);

    let dp = new Map();

    for (const num of nums) {
        const remainder = num % k;
        const next = new Map();

        // Single element subarray
        next.set(
            remainder,
            (next.get(remainder) || 0) + 1
        );

        // Previous subarrays ko current number ke saath extend karo
        for (const [r, count] of dp) {
            const newRemainder = (r * remainder) % k;

            next.set(
                newRemainder,
                (next.get(newRemainder) || 0) + count
            );
        }

        // Result mein current ending wale subarrays add karo
        for (const [r, count] of next) {
            result[r] += count;
        }

        dp = next;
    }

    return result;
};