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

function getMAximumSS(shipments){

    let maximumSS = 0;
    for(const shipment of shipments){
        if(shipment.SS > maximumSS)
            maximumSS = shipment.SS;
    }

    let maxSSDriverIndex = shipments.findIndex(ssDriver => ssDriver.SS === maximumSS)
    return shipments[maxSSDriverIndex];
}


function assignShipmentDestinationToDriver(shipmentsDestination, drivers){
    const allShipmentsAssigned = [];
    const driversToAssign = [...drivers]
    for(const shipmentDestination of shipmentsDestination){

        const shipments = assignSSForDriver(shipmentDestination, driversToAssign)
    
        const maximumIndex = getMAximumSS(shipments)
    
        const findName = driversToAssign.findIndex(driver => driver === maximumIndex.name);
    
        shipments[findName].shipmentDestination = shipmentDestination
        
        allShipmentsAssigned.push(shipments[findName])
        
        driversToAssign.splice(findName, 1)
}

return allShipmentsAssigned;
}


module.exports = {
    assignShipmentDestinationToDriver,
    createobjectDriverList,
    getMAximumSS
}