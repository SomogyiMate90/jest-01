const { divideNums } = require("./divideNums")

function filterEven(numbers){

    if(!Array.isArray(numbers)) throw new Error('Nem tömböt kapok argomentumként')

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