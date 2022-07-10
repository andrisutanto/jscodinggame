


function primeTime(num) {

    // perulangan mulai dari 2
    // cari nilai max, semisal angka 7, jadi 3, didapat dari 7 dibagi 2, kemudian round down = 3
    // selama i lebih kecil sama dgn dari max, looping terus,
    // karena i = 2, dan max = 3, jadi looping 2x aja
    
    // cek dgn kondisi, jika angka yang di passing di MOD i, dan sisanya 0, maka bukan Prima

    let max = Math.floor(num/2);

    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            // divisible!  not prime
            return 'false';
        }
    }
    return 'true';
}

console.log(primeTime(9));
