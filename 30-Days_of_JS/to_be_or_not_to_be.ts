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