var angka = [1, 5, 3, 4, 2, 6, 7, 9, 8, 10, 20];
//kita tampung di variabel baru, karena filter tidak mengoverwrite isi.
var angka2 = angka.find(function (x) {
  return x > 7;
});

console.log(angka2);
