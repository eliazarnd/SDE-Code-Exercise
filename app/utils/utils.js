const VOWELS = ["a", "e", "i", "o", "u"];

const CONSONANTS = ["b", "c", "d", "f","g",
                    "h","j", "k", "l", "m",
                    "n", "p", "q", "r", 
                    "s", "t", "v", "w", 
                    "x", "y", "z"]
                    
function isVowel(character){
    return VOWELS.includes(character.toLowerCase());
}

function isConsonant(character){
    return CONSONANTS.includes(character.toLowerCase());
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
        if(isConsonant(word)){
            numberOfConsonants++;
        }
    })

    return numberOfConsonants;

}

module.exports = {
    isVowel,
    isConsonant,
    countVowels,
    countConsonants
}