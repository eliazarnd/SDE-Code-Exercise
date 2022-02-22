//requiring path and fs modules
const path = require('path');
const fs = require('fs')

const { getTotalSS } = require('./utils/ssCalculate');
const { assignShipmentDestinationToDriver } = require('./utils/makerObjectSS');
const { showOutPutAssigneds, showTotalSS } = require('./output');

//Setting
const mockupsRefs = "/mockups"
const directoryPath = path.join(__dirname, mockupsRefs);

function readFile(fileName = ""){

    try {
        let contain = fs.readFileSync(`${directoryPath}/${fileName}.txt`).toString();

        return contain;

    } catch (error) {
        throw new Error("file does not exist");
    }

   
}

function getDrivers(){
    try {
        let drivers = readFile("drivers");

        return drivers.split("\n").map(driver => driver.trim());
        
    } catch (error) {
        console.error(error)        
    }
   
}

function getShipmentsDestinations(){

    try {
        let shipmentDestination = readFile("shipmentsDestination");
        return shipmentDestination.split("\n").map(shipmentDestination => shipmentDestination.trim());
        
    } catch (error) {
        console.error(error)
    }
}


const driversArray = getDrivers();
const shipmentsDestinationArray = getShipmentsDestinations();

function initApp(){

    const shipmentAssigneds = assignShipmentDestinationToDriver(shipmentsDestinationArray, driversArray)
    const totalSS = getTotalSS(shipmentAssigneds);

    console.log(showTotalSS(totalSS))
    console.log(showOutPutAssigneds(shipmentAssigneds))
}

if(driversArray.length === shipmentsDestinationArray.length){
    initApp();
}else{
    throw new Error("Drivers and Shipments destination length must be equal")
}

