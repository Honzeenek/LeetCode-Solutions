type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(testVal: any) {
            if (testVal === val) {
                return true
            } else {
                throw new Error('Not Equal')
            }
        },
        notToBe(testVal: any) {
            if (testVal !== val) {
                return true
            } else {
                throw new Error('Equal')
            }
        }
    }
};

var expect = function(val) {
    function expect(val) {
        return {
            toBe(testValue) {
                if(testValue === val){
                    return true
                } else {
                    throw new Error('Not Equal')
                }
                
            },
            notToBe(testValue) {
                if(testVal !== val) {
                    return true
                } else {
                    throw new Error('Equal')
                }
            } 
        }
    }
};