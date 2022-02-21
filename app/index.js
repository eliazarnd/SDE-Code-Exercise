//requiring path and fs modules
const path = require('path');
const fs = require('fs')
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

        return drivers.trim().split("\n");
        
    } catch (error) {
        console.error(error)        
    }
   
}

function getShipmentsDestinations(){

    try {
        let shipmentDestination = readFile("shipmentsDestination");
        return shipmentDestination.trim().split("\n");
        
    } catch (error) {
        console.error(error)
    }
}

const driversArray = getDrivers();
const shipmentsDestinationArray = getShipmentsDestinations();


/**(async () => {
    await init();
  
    //await login(credentials);
  })()
 */
