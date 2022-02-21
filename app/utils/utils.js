const VOWELS = ["a", "e", "i", "o", "u"];
function isVowel(character){
    return VOWELS.includes(character.toLowerCase());
}

function countVowels(word){

    const wordsList = word.toLowerCase().split("");
    let numberOfVowels = 0;
    wordsList.forEach(word => {
        if(isVowel(word)){
            numberOfVowels++;
        }
    })

    return numberOfVowels;
}

module.exports = {
    isVowel,
    countVowels
}