// for文からの脱出はbreakを使えば出来るが、これは直接上のfor文からの脱出であり、2重、3重のループになったfor文に関してはbreak文だけでは機能不足である。 これを解決するために、JavaScriptでは、ループにラベルを付けて、脱出するループﾟを指定することが出来る。
loop1:
for( var i=0; i<7; i++ ){
  console.log('i: ' + i);
  loop2:
  for( var j=0; j<7; j++ ) {
    console.log('j: ' + j);
    break loop1;
  }
}
