const caesarEncryption = (str) => {
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let encAlphabet = "bcdefghijklmnopqrstuvwxyza";

    let arrReal = realAlphabet.split("");
    let arrEnc = encAlphabet.split("");

    let panjangStr = str.length;
    let oldString = str.split("");
    let newString = [];

    for(let i=0; i<panjangStr; i++) {

        //looping lagi sebanyak real alphabet
        for(let j=0; j<realAlphabet.length; j++) {
            
            if(oldString[i] === arrReal[j]) {
                newString.push(arrEnc[j]);
            }

        }

    }

    return newString.join("");

}

console.log(caesarEncryption("database"));