const now = new Date();

let user = {
  name: "길동",
  address: "부산",
};
let sum = {
  a: 1,
  b: 2,
};

function Address(name, address) {
  this.name = name;
  this.address = address;
}

let park = new Address("박", "서울");
let lee = new Address("이", "부산");

// let ul = Address("우", "인천");

// console.log(ul); 오류 발생

function Cal() {
  this.a = 1;
  this.b = 2;
  this.sum = function () {
    return this.a + this.b;
  };
}

const c = new Cal();
console.log(c.sum());

console.log(now);
console.log(typeof now);

console.log("Year : " + now.getFullYear());
console.log("month : " + now.getMonth());
console.log(now.toLocaleString());
