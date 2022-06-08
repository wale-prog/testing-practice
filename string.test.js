const stringLength = require('./stringLength')
const reverseString = require('./reverseString')
const Calculator = require('./Calculator')
const capitalize = require('./capitalize')

test('string-length', ()=>{
    expect(stringLength('hello')).toBe(5);
})
test('check >= 0', ()=>{
    expect(()=> stringLength('cbndhejuthf')).toThrow(/The string length cannot be more than 10 or less than 1/);
    expect (()=> stringLength('')).toThrow(Error);
})

test('test for type == str', ()=>{
    expect(typeof(reverseString ('hello'))).toBe("string");
    expect (reverseString ('universe')).toBe('esrevinu')
})

describe('My calculator', ()=>{
    const data = new Calculator(6, 2)
    test('Calulator class', ()=>{
        expect(()=>typeof(data).toBe("object"))
    })
    describe('add function', ()=>{
        test('Add', ()=>{
            expect(data.add()).toEqual(8);                       
        })
        test('Check Add result type', ()=>{
            expect(typeof(data.a && data.b)).toBe('number')
        })
        test('', ()=>{
                
        })
        
    })
   describe('Subtract function', ()=>{
    test('Subtract', ()=>{
        expect(data.subtract()).toEqual(4)
        })
    test('Check subtract result type', ()=>{
        expect(typeof(data.a && data.b)).toBe('number')
        })
    })
   

    describe('Divide function', ()=>{
     test ('divisor is not 0', ()=>{
        expect(data.b).toBeGreaterThan(0)
        })
     test('Divide', ()=>{
        expect(data.divide()).toEqual(3)
        })
    })
   
    describe('Multiply function', ()=>{
        test('Multiply function', ()=>{
            expect (data.multiply()).toEqual(12)
        })
    })  
})

describe('capitalize function', ()=>{
    const string = 'phoebe'
    test('input argument must be a string', ()=>{
        expect(capitalize(typeof(string))).toBe('String')
    })
    test('cap function returns cap string', ()=>{
        expect(capitalize('string')).toBe('String')
    })
})