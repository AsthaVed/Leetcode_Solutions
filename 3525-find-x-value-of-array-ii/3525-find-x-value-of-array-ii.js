/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
class SegmentTree {
    constructor(nums, k) {
        this.n = nums.length;
        this.k = k;

        this.tree = Array.from(
            { length: 4 * this.n },
            () => ({
                prod: 1 % k,
                cnt: new Array(k).fill(0)
            })
        );

        this.build(1, 0, this.n - 1, nums);
    }

    merge(left, right) {
        const result = {
            prod: (left.prod * right.prod) % this.k,
            cnt: left.cnt.slice()
        };

        for (let r = 0; r < this.k; r++) {
            const newRemainder =
                (left.prod * r) % this.k;

            result.cnt[newRemainder] += right.cnt[r];
        }

        return result;
    }

    build(node, l, r, nums) {
        if (l === r) {
            const value = nums[l] % this.k;

            this.tree[node].prod = value;
            this.tree[node].cnt[value] = 1;

            return;
        }

        const mid = Math.floor((l + r) / 2);

        this.build(node * 2, l, mid, nums);
        this.build(node * 2 + 1, mid + 1, r, nums);

        this.tree[node] = this.merge(
            this.tree[node * 2],
            this.tree[node * 2 + 1]
        );
    }

    update(node, l, r, index, value) {
        if (l === r) {
            const remainder = value % this.k;

            this.tree[node].prod = remainder;
            this.tree[node].cnt.fill(0);
            this.tree[node].cnt[remainder] = 1;

            return;
        }

        const mid = Math.floor((l + r) / 2);

        if (index <= mid) {
            this.update(
                node * 2,
                l,
                mid,
                index,
                value
            );
        } else {
            this.update(
                node * 2 + 1,
                mid + 1,
                r,
                index,
                value
            );
        }

        this.tree[node] = this.merge(
            this.tree[node * 2],
            this.tree[node * 2 + 1]
        );
    }

    query(node, l, r, ql, qr) {
        // Completely inside range
        if (ql <= l && r <= qr) {
            return this.tree[node];
        }

        const mid = Math.floor((l + r) / 2);

        // Completely in left
        if (qr <= mid) {
            return this.query(
                node * 2,
                l,
                mid,
                ql,
                qr
            );
        }

        // Completely in right
        if (ql > mid) {
            return this.query(
                node * 2 + 1,
                mid + 1,
                r,
                ql,
                qr
            );
        }

        // Both sides
        const left = this.query(
            node * 2,
            l,
            mid,
            ql,
            qr
        );

        const right = this.query(
            node * 2 + 1,
            mid + 1,
            r,
            ql,
            qr
        );

        return this.merge(left, right);
    }
}

var resultArray = function(nums, k, queries) {

    const n = nums.length;

    const tree = new SegmentTree(nums, k);

    const result = [];

    for (const [index, value, start, x] of queries) {

        // Persistent update
        tree.update(
            1,
            0,
            n - 1,
            index,
            value
        );

        // Query [start ... n-1]
        const node = tree.query(
            1,
            0,
            n - 1,
            start,
            n - 1
        );

        result.push(node.cnt[x]);
    }

    return result;
};