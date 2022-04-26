var obj = {
  name: "ini object literal",
};
obj.halo = function () {
  console.log(this);
  console.log("halo");
};

obj.halo();
// this mengembalikan object yang bersangkutan
