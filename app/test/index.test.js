const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const excpect = chai.expect();

const { isVowel,
        isConsonant, 
        countVowels, 
        countConsonants } = require('../utils/utils');

const { calculateSuitabilityScore } = require('../utils/ssCalculate')

const { createobjectDriverList, getMAximumSS } = require('../utils/makerObjectSS');

describe('Helpers Tests', function () {
  describe('#isVowel', function () {
    
    it('should return if character is a vowel', function () {
        //Arrange
        const input = "a";
        //Act
        const result = isVowel(input);
        //Assert
        result.should.be.equal(true);
    });

    it('should return if character is not a vowel', function () {
        //Arrange
        const input = "x";
        //Act
        const result = isVowel(input);
        //Asssert
        result.should.be.equal(false);
    });

    it('should return number of vowels that contains a word', function () {
        //Arrange
        const input = "testing word";
        //Act
        const result = countVowels(input);
        //Assert
        result.should.be.equal(3);
    });

    
  });

  describe('#isConsonant', function(){

    it('should return if character is a consonant', function () {
        //Arrange
        const input = "f";
        //Act
        const result = isConsonant(input);
        //Assert
        result.should.be.equal(true);
    });

    it('should return if character is not a consonant', function () {
        //Arrange
        const input = "a";
        //Act
        const result = isConsonant(input);
        //Asssert
        result.should.be.equal(false);
    });

    it('should return number of consonants that contains a word', function () {
        //Arrange
        const input = "testing word";
        //Act
        const result = countConsonants(input);
        //Assert
        result.should.be.equal(8);
    });

  })

});

describe('Suitability score test', function(){

    describe('Calculate suitability score', function(){

        it('should return the sutability score of street name and driver name', function(){

            //Arrange
            const [ streetName, dirverName ] = ["Street test", "Anybody"];

            //Act
            const result = calculateSuitabilityScore(streetName, dirverName);
            const expectResult = 7.5;
            //Assert
            result.should.be.equal(expectResult);

        })

    })

    
    describe('Assign SS (Suitability Score) to driver', function(){

        it('should return an object with sutability score base on streetName and driver name', function(){

            //Arrange
            const drivers = ["Blake	White", "Steven	Robertson"]

            const [ streetName, driversList ] = ["Street test", drivers];

            //Act
            const results = createobjectDriverList(streetName, driversList);
            
            //Assert
            results.forEach(result => {
                result.should.to.have.all.keys("name", "SS");
            })
        
        })

    })

    describe('get the maximun SS (Suitability Score) to shipment Object', function(){

        it('should return the object that contains maximun sutability score from shipment Object', function(){

            //Arrange
            const shipments = [{name: "Blake White",SS: 4.5},
                             {name: "Steven	Robertson",SS: 2.5}]
            //Act
            const result = getMAximumSS(shipments);
            //Assert
            result.should.to.deep.equal({ name: "Blake White", SS: 4.5 })
        
        })

    })
})
