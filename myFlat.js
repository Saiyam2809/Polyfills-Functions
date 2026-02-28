Array.prototype.myFlat = function(depth = 1){
    if (depth < 0) {
        return this.slice();
    }
    const result = [];
    function flatten(arr, currentDepth){
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1)
            }
            else{
                result.push(arr[i])
            }
        }
    }
    flatten(this, 0)
    return result
}

[1, [2]].myFlat()
[1, [2, [3]]].myFlat(2)