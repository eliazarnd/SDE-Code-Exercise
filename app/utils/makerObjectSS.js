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

function getMAximumSS(shipment){

    let maximumSS = 0;
    for(const ship of shipment){
        if(ship.SS > maximumSS)
            maximumSS = ship.SS;
    }

    let maxSSDriverIndex = shipment.findIndex(ssDriver => ssDriver.SS === maximumSS)
    return shipment[maxSSDriverIndex];
}



module.exports = {
    createAobjectDriverList
}