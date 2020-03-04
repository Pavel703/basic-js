module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let deep = [1];
        if(Array.isArray(arr))
        {
            for(let i = 0;i<arr.length;i++)
            {
                if(Array.isArray(arr[i]))
                {
                    deep.unshift(this.calculateDepth(arr[i]) + 1);
                }
            }
        }
        return Math.max(...deep);
    }
};
