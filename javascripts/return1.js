function a() {
  return;
}

console.log(a());

function b() {
}

console.log(b());

function c() {
  return "c";
}

console.log(c());

// 改行するとreturnだけになる(セミコロンが補われる)
function d() {
  return
  "d";
}

console.log(d());
