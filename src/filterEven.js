const { divideNums } = require("./divideNums")

function filterEven(numbers){

    if(!Array.isArray(numbers)) throw new Error('Nem tömböt kapok argomentumként')

        if(!numbers.every( item=> typeof item === 'number')){

         throw new Error('Argument must be an array of numbers -- Az argomentumnak minden elemének szuámnak kell lennie');
    }

    const evenNumbers = numbers.filter( (item,index)=>{
        
        const [,reminder] = divideNums(item, 2);
      
/*
        console.log('eredmény a filteEven blokban');
        console.log(result);

        const remainder = result[1];
        const isEven = remainder === 0;
        */

        return reminder === 0;
    });

    return evenNumbers;

}

module.exports = {
    filterEven
}