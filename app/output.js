function showOutPutAssigneds(shipmentAssigneds){

    let outPutMessage = "";

    for(shipmentAssigned of shipmentAssigneds){
        
        const { name, shipmentDestination } = shipmentAssigned
        outPutMessage += `The shipment destination ${shipmentDestination} was assigned to ${name} \n`    
    }

    return outPutMessage

}

module.exports = {
    showOutPutAssigneds
}