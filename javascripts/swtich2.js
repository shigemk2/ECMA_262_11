var a = 11;

switch(a % 4) {
case 1:
  console.log("one");
  break;
case 2:
  console.log("two");
  break;
case 3:
  loop1:
  for( var i=0; i<7; i++ ){
    console.log('i: ' + i);
    loop2:
    for( var j=0; j<7; j++ ) {
      console.log('j: ' + j);
      break loop1;
    }
  }
  console.log("three");
  break;
default:
  console.log("other");
  break;
}

