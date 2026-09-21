/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const nums = [1,2,3,4], k=5
var resultArray = function(nums, k) {
      const result = new Array(k).fill(0);

    // dp[r] = current position se end hone wale
    // subarrays jinka product % k = r
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const next = new Array(k).fill(0);

        // Single element subarray
        const remainder = num % k;
        next[remainder]++;

        // Previous subarrays ko current num ke saath extend karo
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                const newRemainder = (r * remainder) % k;
                next[newRemainder] += dp[r];
            }
        }

        // Current subarrays ke counts result mein add karo
        for (let r = 0; r < k; r++) {
            result[r] += next[r];
        }

        dp = next;
    }

    return result;
};