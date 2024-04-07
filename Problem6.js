// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

let babylions = arr.filter((value) => value.part==="fe");

babylions = babylions.sort(function(a, b) {
  return b.age - a.age;
})

babylions = babylions.map((babylion) => {
  babylion.part = babylion.part.toUpperCase();
  return babylion;
})