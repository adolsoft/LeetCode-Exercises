
const ikiSayiTopla = (dizi, hedef) => {
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
let verilenDizi = [2, 7, 11, 15];
let hedef = 9;
const sonuc = ikiSayiTopla(verilenDizi, hedef);

//console.log(sonuc);

// O(n) - One-pass Hash Table

/*Array map metodu uygulandığı dizinin tüm elemanlarını tek tek gezer ve verilen fonksiyon üzerinde o elemanı kullanarak işlemler yapar. Elde edilen sonuçlardan yeni bir dizi oluşturarak geri dönderir. Orjinal dizi olduğu gibi kalır. */

let nums = [1, 3, 5, 7, 9, 11, 15];
let target = 8;
var twoSum = function (nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {

        let complement = target - nums[i];

        if (map.has(complement)) {   // has(), belirtilen anahtara sahip bir öğenin var olup olmadığını gösteren bir boole değeri döndürür.
            return [map.get(complement), i]  // get() yöntemi, bir Haritadaki bir anahtarın değerini alır:
        }
        map.set(nums[i], i);  //set() yöntemiyle bir Haritaya öğeler ekleyebilirsiniz: mevcut Harita değerlerini değiştirmek için de kullanılabilir:

        console.log(`ilk dongü ${i} ve map ${nums[i]}`)
    }
}

//console.log(twoSum(nums, target));

//Map metodu ile ilgili mrnekler

const sayilar = [1, 3, 5, 7, 9];
const sayilarinKareleri = sayilar.map(sayi => sayi * sayi);
//console.log(sayilarinKareleri);
// Ekrana 1, 9, 25, 49, 91 sonuçları basılır.

//foreach  yapımı

var twoSumFor = function(nums, target) {    
	// Akümülatörü boş bir diziyle başlatın, toplamı hedefin değeri olan dizinleri döndürmek için dolduracağımız dizidir
    return nums.reduce((accumulator, val, index, arr) => {
		// akümülatör dizisi 2'e ulaşmazsa döngüyü çalıştırmaya devam edin
        if(accumulator.length < 2) {
            arr.forEach((item, arrIndex) => {
				// Bu, akümülatörün doldurulduğu yerdir ve değerlerin toplamına karşı kontrol eder ve aynı dizi indeksi değildir
                if ((val + item) === target && index != arrIndex) {
                    accumulator?.push(index);
                    accumulator?.push(arrIndex);
                }
            });
        }
        
        return accumulator;
    }, []);
};
console.log(twoSumFor(nums, target));