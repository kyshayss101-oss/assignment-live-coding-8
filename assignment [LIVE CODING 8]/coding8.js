// BAGIAN 1 — STRING & NUMBER [ASSIGNMENT LIVE CODING 8 KEYSHA]

// 1. Balik Kata
function balikKata(kata) {
    let trimmed = kata.trim();
    let words = trimmed.split(/\s+/); 
    let result = [];
    
    for (let word of words) {
        if (word !== "") {
            result.push(word);
        }
    }

    let left = 0;
    let right = result.length - 1;
    while (left < right) {
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
    }

    return result.join(" ");
}
console.log("1. TEST BALIK KATA");
console.log(balikKata("ayo belajar coding gais")); 


// 2. Cek Palindrome
function isPalindrome(str) {
    let cleanStr = "";
    let lowerStr = str.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        let code = lowerStr.charCodeAt(i);
        if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            cleanStr += lowerStr[i];
        }
    }

    let start = 0;
    let end = cleanStr.length - 1;
    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) return false;
        start++;
        end--;
    }
    return true;
}
console.log("2. TEST PALINDROME");
console.log("Katak:", isPalindrome("Katak")); 
console.log("Leroy:", isPalindrome("Leroy"));


// 3. Format Angka ke Rupiah
function toRupiah(amount) {
    if (amount === 0) return "Rp0,00";
    let isNegatif = amount < 0;
    let angkaAbsolut = Math.abs(amount);

    let totalSen = Math.round(angkaAbsolut * 100);
    let sen = totalSen % 100;
    let rupiahUtama = Math.floor(totalSen / 100);

    let strRupiah = String(rupiahUtama);
    let hasilFormat = "";
    let hitung = 0;

    for (let i = strRupiah.length - 1; i >= 0; i--) {
        if (hitung > 0 && hitung % 3 === 0) {
            hasilFormat = "." + hasilFormat;
        }
        hasilFormat = strRupiah[i] + hasilFormat;
        hitung++;
    }

    let formatSen = sen < 10 ? "0" + sen : String(sen);
    let tanda = isNegatif ? "-Rp" : "Rp";

    return tanda + hasilFormat + "," + formatSen;
}
console.log("3. TEST RUPIAH");
console.log(toRupiah(1500000)); 
console.log(toRupiah(-1250.5)); 


// 4. Hitung Frekuensi Kata
function wordCount(teks) {
    let rawWords = teks.toLowerCase().split(/\s+/);
    let frekuensi = {};

    for (let token of rawWords) {
        if (token === "") continue;

        let start = 0;
        let end = token.length - 1;

        while (start <= end) {
            let code = token.charCodeAt(start);
            if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) break;
            start++;
        }
        while (end >= start) {
            let code = token.charCodeAt(end);
            if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) break;
            end--;
        }

        let kataBersih = "";
        for (let i = start; i <= end; i++) {
            kataBersih += token[i];
        }

        if (kataBersih !== "") {
            frekuensi[kataBersih] = (frekuensi[kataBersih] || 0) + 1;
        }
    }
    return frekuensi;
}
console.log("4. TEST WORD COUNT");
console.log(wordCount("Makan nasi, nasi uduk. Makan-makan terus!")); 


// 5. FizzBuzz Plus
function fizzBuzzPlus(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let val = "";
        if (i % 15 === 0) val = "FizzBuzz";
        else if (i % 3 === 0) val = "Fizz";
        else if (i % 5 === 0) val = "Buzz";
        else val = i;

        if (i % 7 === 0) {
            res.push(String(val) + "!");
        } else {
            res.push(val);
        }
    }
    return res;
}
console.log("\n=== 5. TEST FIZZBUZZ PLUS ===");
console.log(fizzBuzzPlus(21));


// BAGIAN 2 — ARRAY & OBJECT

// 1. Flatten Array
function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            let nested = flattenArray(item);
            for (let sub of nested) {
                result.push(sub);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log("6. TEST FLATTEN ARRAY");
console.log(flattenArray([1, [2, [3, [4]], 5]]));


// 2. Group By
function groupBy(arr, key) {
    let grouped = {};
    if (!arr || arr.length === 0) return grouped;

    for (let item of arr) {
        let kategori = item[key];
        if (kategori === undefined) continue;

        if (!grouped[kategori]) {
            grouped[kategori] = [];
        }
        grouped[kategori].push(item);
    }
    return grouped;
}
console.log("7. TEST GROUP BY");
const dataUser = [
    { name: "Andi", role: "UX" },
    { name: "Alex", role: "UI" },
    { name: "Caca", role: "UX" }
];
console.log(groupBy(dataUser, "role"));


// BAGIAN 3 — CLASS & OOP

class Calculator {
    #value = 0;
    #history = [];

    setValue(val) {
        this.#value = val;
        this.#history.push(`set value jadi ${val}`);
        return this;
    }

    add(val) {
        this.#value += val;
        this.#history.push(`tambah ${val}`);
        return this;
    }

    subtract(val) {
        this.#value -= val;
        this.#history.push(`kurang ${val}`);
        return this;
    }

    multiply(val) {
        this.#value *= val;
        this.#history.push(`kali ${val}`);
        return this;
    }

    divide(val) {
        if (val === 0) {
            console.warn("warning: gabisa bagi pake nol ege");
            this.#history.push("percobaan bagi 0 (gagal)");
        } else {
            this.#value /= val;
            this.#history.push(`bagi ${val}`);
        }
        return this;
    }

    power(val) {
        this.#value = Math.pow(this.#value, val);
        this.#history.push(`pangkat ${val}`);
        return this;
    }

    reset() {
        this.#value = 0;
        this.#history = [];
        return this;
    }

    get result() {
        return this.#value;
    }

    get history() {
        let salinan = [];
        for (let log of this.#history) {
            salinan.push(log);
        }
        return salinan;
    }
}
console.log("8. TEST CALCULATOR");
const myCalc = new Calculator();
const hasil = myCalc.setValue(10).add(5).multiply(2).divide(0).result;
console.log("Hasil:", hasil);
console.log("Riwayat:", myCalc.history);

