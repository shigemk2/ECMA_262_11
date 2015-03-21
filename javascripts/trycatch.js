function div(x, y) {
  try{
    var div = sub(x,y);
    // var div = x/y;
  } catch( e ) {
    console.log('無理');
  } finally {
    return y;
  }
}

console.log(div(4,3));
console.log(div(2,1));
console.log(div(2,"hoge"));
