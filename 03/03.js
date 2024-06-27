
// document.addEventListener("DOMContentLoaded", function () { 
//   console.log('안녕!!')
// }) ;

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("화살표 함수!!")

  //변수선언
  // const msg = document.getElementById('msg') ;
  const msg = document.querySelector('#msg');
  const bt = document.querySelector('button') ;

  // msg.innerHTML = '<h1>안녕</h1>' ;
  // msg.textContent = '<h1>안녕</h1>' ;

  bt.addEventListener("click", ()=>{
    if (msg.innerHTML == '안녕') msg.innerHTML = "잘가~~" ;
    else msg.innerHTML = "안녕" ;
  });
});