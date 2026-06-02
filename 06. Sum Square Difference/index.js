let tampung1 = 0;           // Menyimpan jumlah kuadrat bilangan
let tampung2sementara = 0;  // Menyimpan jumlah bilangan 1-100
let tampung2 = 0;           // Menyimpan kuadrat dari jumlah bilangan
let hasil = 0;              // Menyimpan hasil akhir

// Menghitung jumlah kuadrat bilangan 1 sampai 100
for (let i = 1; i <= 100; i++) {
  tampung1 += Math.pow(i, 2);
}

// Menghitung jumlah bilangan 1 sampai 100
for (let i = 1; i <= 100; i++) {
  tampung2sementara += i;
}

// Mengkuadratkan hasil penjumlahan
tampung2 = Math.pow(tampung2sementara, 2);

// Menghitung selisih antara kuadrat jumlah dan jumlah kuadrat
hasil = Math.abs(tampung1 - tampung2);

// Menampilkan hasil
console.log(hasil);
