const countOX = (str) => {
    let countO = 0;
    let countX = 0;

    let panjangStr = str.length;
    let arrStr = str.split("");

    for(let i=0;i<panjangStr;i++){
        if(arrStr[i] === "o") {
            countO++;
        }
        else if(arrStr[i] === "x") {
            countX++;
        }
    }

    return "Huruf O = " + countO + " ,Huruf X = " + countX;
}

console.log(countOX("ooooxxxoooxxx"));
