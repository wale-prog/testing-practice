const stringLength = require('./stringLength');

test('string-length', ()=>{
    expect(stringLength('hello')).toBe(5);
})
test('check >= 0', ()=>{
    expect(()=> stringLength('cbndhejuthf')).toThrow(/The string length cannot be more than 10 or less than 1/);
    expect (()=> stringLength('')).toThrow(Error);
})