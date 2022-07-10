function letterCapitalize(str) {
    let newString = '';

    // init dahulu, apakah inputan adalah kata yang baru?
    let newWord = true;

    for (let i = 0; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }

        newWord = str[i] === ' ' ? true : false;
    }

    return newString;
}

console.log(letterCapitalize("saya makan nasi"));