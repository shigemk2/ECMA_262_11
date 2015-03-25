// FunctionBody内にないreturn文を含むなら構文的に正しくない
return 1;
console.log(1);

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
