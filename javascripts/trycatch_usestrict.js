"use strict";
function div(x, y) {
  try{
    // 変数名にevalやargumentsは使ってはいけない
    // var arguments = sub(x,y);
    // var eval = sub(x,y);
    var div = sub(x, y);
  } catch( e ) {
    console.log('無理');
  } finally {
    return y;
  }
}

console.log(div(4,3));
console.log(div(2,1));
console.log(div(2,"hoge"));
