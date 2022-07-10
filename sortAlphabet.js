function alphabetSoup(str) {
    let letters = str.split('');
    let strSort = letters.sort();
    let newString = strSort.join('');

    return newString;
    //return letters.sort().join('');
}

console.log(alphabetSoup("selvy"));
