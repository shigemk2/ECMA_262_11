// http://ja.wikibooks.org/wiki/JavaScript_%E3%83%AB%E3%83%BC%E3%83%97%E6%96%87%E5%BE%A9%E7%BF%92#.E3.83.A9.E3.83.99.E3.83.AB.E3.81.AE.E4.BD.BF.E7.94.A8
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
