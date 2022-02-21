const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const excpect = chai.expect();

const { isVowel, 
        countVowels, 
        countConsonants } = require('../utils/utils');
const { calculateSuitabilityScore } = require('../utils/ssCalculate')

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

    it('should return number of consonants that contains a word', function () {
        //Arrange
        const input = "testing word";
        //Act
        const result = countConsonants(input);
        //Assert
        result.should.be.equal(8);
    });
  });
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

})
