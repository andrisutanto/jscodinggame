const palindrome = (str) => {
    //hilangkan semua karakter dan spasi
    str = str.replace(/[^A-Z0-9]/ig, "");
    //jadikan huruf kecil untuk kata yang dimasukkan
    str = str.toLowerCase();
    //simpan string kedalam variable strPertama, yang nantinya akan digunakan untuk compare
    let strPertama = str;
    //jadikan array terlebih dahulu
    let newArray = str.split("");
    //reverse / balikkan susunan array tersebut, kemudian jadikan string lagi dan berikan "" sebagai penghubung
    let strKedua = newArray.reverse().join("");
    //compare string pertama dan kedua
    if(strPertama === strKedua) {
        return "Palindrome";
    } else if(strPertama !== strKedua) {
        return "Bukan Palindrome";
    }
}

console.log(palindrome("makan"));
