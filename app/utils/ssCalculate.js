const { countVowels, countConsonants } = require('./utils')

function calculateSuitabilityScore(streetName, driverName){
    
    const streetNameLength = streetName.length;
    const driverNameLength = driverName.length;

    let ssCalculate = 0;

    if(streetNameLength % 2 === 0){
         ssCalculate = countVowels(driverName) * 1.5;

        if(driverNameLength % 2 === 0){
            ssCalculate *= 1.5;
        }       
       
    }    
    
    if(streetNameLength % 2 !== 0){
        ssCalculate = countConsonants(driverName) * 1;
         if(driverNameLength % 2 !== 0){
            ssCalculate *= 1.5;
        } 
    
    }
    
    return ssCalculate; 
}

module.exports = {
    calculateSuitabilityScore
}