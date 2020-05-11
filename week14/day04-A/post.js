const data = require("./data");
// console.log(data);

let arr = [];
data.forEach((ele) => {
  arr.push({ postId: ele.postId, body: ele.body });
});
// console.log(arr)
let filter_arr = arr.filter((elem) => {
   return elem.body.length <= 50;

});
// console.log(filter_arr);

ids = new Set(arr.map((elem) => elem.postId));
// console.log(ids);

for (let id of ids) {
  let result = arr.filter((elem) => elem.postId === id).length;
  console.log(`Number of posts of postId ${id} is ${result}`);
}