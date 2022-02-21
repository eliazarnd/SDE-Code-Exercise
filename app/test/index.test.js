const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const excpect = chai.expect();

const { isVowel, countVowels } = require('../utils/utils');

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
        
        const input = "x";
        const result = isVowel(input);

        result.should.be.equal(false);
    });

    it('should return number of vowels that contains a word', function () {
        
        const input = "testing word";
        const result = countVowels(input);

        result.should.be.equal(3);
    });

  });
});