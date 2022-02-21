const { calculateSuitabilityScore } = require('./ssCalculate')

function createAnobjectDriverList(streetName, drivers){

    const ssDriversList = []
    drivers.forEach(driver => {
        let ssForDriver = calculateSuitabilityScore(streetName, driver);

        ssDriversList.push(
            {
            name: driver,
            SS: ssForDriver,
        }  )
        
    })

    return ssDriversList;
}

function assignSSForDriver(streetName, drivers){
  
    const ssDriverList = createAnobjectDriverList(streetName, drivers);
    return ssDriverList
    
  }



module.exports = {
    createAobjectDriverList
}