# SDE Platform Science Test

## Describing Problem

Our sales team has just struck a deal with Acme Inc to become the exclusive provider for routing their product shipments via 3rd party trucking  fleets. The catch is that we can only route one shipment to one driver per day. 
Each day we get the list of shipment destinations that are available for us to offer to drivers in our network. Fortunately our team of highly trained  data scientists have developed a mathematical model for determining which drivers are best suited to deliver each shipment. 

With that hard work done, now all we have to do is implement a program that assigns each shipment destination to a given driver while  maximizing the total suitability of all shipments to all drivers.

**The top-secret algorithm is: **
1. If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s  name multiplied by 1.5. 
2. If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by  1. 
3. If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the  SS is increased by 50% above the base SS. 

## Requirements

Write an application in the language of your choice that assigns shipment destinations to drivers in a way that maximizes the total SS over the set  of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver. Your program should run on the  command line and take as input two newline separated files, the first containing the street addresses of the shipment destinations and the second  containing the names of the drivers. The output should be the total SS and a matching between shipment destinations and drivers. You do not  need to worry about malformed input, but you should certainly handle both upper and lower case names. 

## Installation

Use the package manager [npm] to install .SDE Platform Science

```bash
npm install
```

This application requires two newline separated files 
Location: **[app\mockups]**
> drivers.txt
shipmentsDestination.txt

dirvers.txt contains a drivers name list to calculate (SS) and assign a shipment
shipmentsDestination.txt contains a streets name list for assigning to driver

**Drivers**

    Austin Johnston
    Luke Smith
    Dylan Payne
    Piers Ince
    Edward Coleman

**Shipments Destinations**

    Jupiter Street
    village Street
    Solar pluys street
    Geria Street
    Windy Street



## Usage

if you need to run automate tests

```bash
npm test
```
if you want to run the console application. run this command

```bash
npm start
```
## Expected output

    The total SS is 48
    
    The shipment destination Jupiter Street was assigned to Edward Coleman 
    The shipment destination village Street was assigned to Piers Ince
    The shipment destination Solar pluys street was assigned to Neil Alsop
    The shipment destination Geria Street was assigned to Austin Johnston
    The shipment destination Windy Street was assigned to Luke Smith

### Note

You can change the contain input files. Following the instructions mentioned before


## License
[MIT](https://choosealicense.com/licenses/mit/)


