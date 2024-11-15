/*

jest.mock('./divideNums',()=>({

    ...jest.requireActual('./divideNums'),  // kibontja az összes kód leírást, majd után (pl.: következő sorban csak azt az egy függvény visszatérítési érétkéneke redményét adom meg)
   // divideNums: () =>([1,0])
}));  // kettő zárójel kell ide, mintha egy "objektumot várnánk!?)"

// const { divideNums } = require("./divideNums");
// const { filterEven } = require("./filterEven")

*/


describe.only('filterEven', ()=>{

    beforeEach(()=>{
        jest.resetModules();
       
     
    })


    test('can filter [1,2,4]',()=>{
        const { filterEven } = require("./filterEven");
        const result = filterEven([1,2,4]);
     

        expect(result).toStrictEqual([2,4]);
    });

    test('can filter [6,8,10]',()=>{

        jest.doMock('./divideNums',()=>({
            ...jest.requireActual('./divideNums'),
            divideNums: () =>([1,0])
        }));

        const { filterEven } = require("./filterEven");
        const { divideNums } = require('./divideNums');

        // const divadNumTest = divideNums(7,3);
        // console.log(divadNumTest);

        const result = filterEven([6,8,10]);

        expect(result).toStrictEqual([6,8,10]);

    });

    test('can filte [3,5,7]', ()=>{

        jest.doMock('./divideNums',()=>({
            ...jest.requireActual('./divideNums'),
            divideNums: () =>([1,1])
        }))

        const { filterEven } = require("./filterEven");
        const { divideNums } = require('./divideNums');

        const result = filterEven([3,5,7]);
        expect(result).toStrictEqual([]);
    })


})