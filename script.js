var penumpang = [];

var tambahPenumpang = function (namaPenumpang, arrayPenumpang) {
  if (arrayPenumpang.length === 0) {
    arrayPenumpang.push(namaPenumpang);
  } else {
    arrayPenumpang.forEach(function (e, i) {
      if (e === undefined) {
        arrayPenumpang[i] = namaPenumpang;
        return;
      }
    });
  }
  return arrayPenumpang;
};
