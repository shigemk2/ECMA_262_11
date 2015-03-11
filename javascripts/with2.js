// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/with
// SyntaxError: Strict mode code may not include a with statement
"use strict";

var a, x, y;
var r = 10;

// ネームスペースを束縛して省略する
// Pythonでいうところのfrom math import *
with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

// a = Math.PI * r * r;
// x = r * Math.cos(Math.PI);
// y = r * Math.sin(Math.PI / 2);

console.log(a);
console.log(x);
console.log(y);
