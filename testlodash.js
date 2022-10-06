// Requiring lodash library
const _ = require("lodash");

// Calling _.truncate() method with
// its parameter
let res = _.truncate("GeeksforGeeks, is a computer science portal.", {
  length: 100,
  omission: "***",
});

// Displays output
console.log(res);
