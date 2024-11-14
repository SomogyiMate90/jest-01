
function divideNums(numA, numB) {

   
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Invalid Argument Exception');
    }

    if (numB === 0) throw new Error('numB cannot be 0');

    const result = Math.floor(numA / numB);
    let reminder = numA % numB;

    reminder = reminder === -0 ? 0 : reminder;
    return [result,reminder];
   
  
    
   
 

  


}

module.exports = {
    divideNums
}
