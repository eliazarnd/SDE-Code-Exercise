const { calculateSuitabilityScore } = require('./ssCalculate')

function createobjectDriverList(streetName, drivers){

    const ssDriversList = []
    drivers.forEach(driver => {
        let ssForDriver = calculateSuitabilityScore(streetName, driver);
        let driverWithSS = {
            name: driver,
            SS: ssForDriver,
        }

        ssDriversList.push(driverWithSS)
        
    })

    return ssDriversList;
}

function assignSSForDriver(streetName, drivers){

    const ssDriverList = createobjectDriverList(streetName, drivers);
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


function assignShipmentDestinationToDriver(shipmentsDestination, drivers){
    const allShipmentsAssigned = [];
    const driversToAssign = [...drivers]
    for(const shipmentDestination of shipmentsDestination){
    //console.log(drivers)
        const shipment = assignSSForDriver(shipmentDestination, driversToAssign)
    
        const maximunIndex = getMAximumSS(shipment)
    
        const findName = driversToAssign.findIndex(driver => driver === maximunIndex.name);
    
        shipment[findName].shipmentDestination = shipmentDestination
        
        allShipmentsAssigned.push(shipment[findName])
        
        driversToAssign.splice(findName, 1)
}

return allShipmentsAssigned;
}


module.exports = {
    assignShipmentDestinationToDriver,
    createobjectDriverList
}