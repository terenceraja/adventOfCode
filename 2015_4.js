const md5 = require("md5");
const data = "bgvyzdsv";

const hashing = (str, i) => {
  let md5Str = md5(str + i);
  return md5Str;
};

for (let i = 0; i < 1000000000; i++) {
  let hex = hashing(data, i);
  if (hex.slice(0, 6) === "000000") {
    console.log(hex, i);
    break;
  }
}
