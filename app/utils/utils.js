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

function countConsonants(word){

    const wordsList = word.replace(" ", "").toLowerCase().split("");

    let numberOfConsonants = 0;
    wordsList.forEach(word => {
        if(!isVowel(word)){
            numberOfConsonants++;
        }
    })

    return numberOfConsonants;

}

module.exports = {
    isVowel,
    countVowels,
    countConsonants
}