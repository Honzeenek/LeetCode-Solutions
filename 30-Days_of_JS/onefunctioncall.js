/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    
    return function(...args){
        if(!called) {
            called = true;
            let result = fn(...args)
            return result
        } 
        return undefined
    }
};