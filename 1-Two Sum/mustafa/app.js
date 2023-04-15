const topla = (dizi, hedef) => {

    const sonucDizi = [];

    for (let i = 0; i < dizi.length - 1; i++) {


        for (let j = i + 1; j < dizi.length; j++) {

            if (dizi[i] + dizi[j] === hedef) {
                
                sonucDizi.push(i)
                sonucDizi.push(j)
            }

        }
    }
    return sonucDizi
};
let gelenDizi = [2, 7, 11, 15];
let hedef = 9;


const sonuc = topla(gelenDizi, hedef);

console.log(sonuc);