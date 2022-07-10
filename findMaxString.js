const findMaxString = (str) => {

    let stringAwal = str.split("");

    //pertama, cari length dari string tadi
    let panjangString = str.length;
    //kenapa cari setengah panjang? karena jika sudah melewati setengah dan tidak ada yang kembar, maka satu string itu tidak ada yang sama
    let setengahPanjang = (Math.floor(panjangString/2)-1);

    //buat variable temporary untuk menampung variable terpanjang
    let arrayStringTerpanjang = [];
    let arrayStringTerpanjangPush = [];
    //buat variable temporary untuk memasukkan text 
    let textStringTerpanjang = "";
    let arraySplit = "";

    let kataYangDicari = "";


    //kalau ketemu, ubah menjadi true
    let match = false;
    //buat perulangan sebanyak setengah panjang


    for(let i=0;i<=panjangString;i++) {

        //masukkan ke dalam array, selama iterasi, dan compare
        //arrayStringTerpanjangPush.push(stringAwal[i]);
        //arrayStringTerpanjang.push(arrayStringTerpanjangPush.slice(0));
        if(match === false) {

        arrayStringTerpanjang.push(stringAwal[i]);

        //jadikan string dahulu
        textStringTerpanjang = arrayStringTerpanjang.join("");

        //kita pecah-pecah dahulu dgn split, ingat, untuk split, array pertama tidak usah diambil
        //jadi mulai dari array 1
        //di split berdasarkan array yang kita cari
        arraySplit = str.split(textStringTerpanjang); 

        if(arraySplit.length > 0) {

            for(let j=1;j<=(arraySplit.length-1);j++) {
                
                if(arraySplit[j].toString() !== "") {
                    match = false;
                    kataYangDicari = textStringTerpanjang;
                } else {
                    match = true;
                    kataYangDicari = textStringTerpanjang;
                    //break;
                }


            }

        } 
    }

        

        
    }

    return textStringTerpanjang;

    //let banyakKata = str.split("a");

    //return kataYangDicari;

}

console.log(findMaxString("cababcabab"));