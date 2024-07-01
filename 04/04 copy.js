// 1. DOM 생성이 되면 img, button 요소를 가져오기
// 2. button 클릭이 되는 경우를 찾아야 함
// 3. img src 속성을 변경 
//     - 랜덤수를 발생 -> 해당하는 랜덤수의 이미지를 가져오기

// 1. DOM 생성이 되면 
document.addEventListener('DOMContentLoaded', ()=>{
  //img, button 요소를 가져오기
  const img = document.querySelector('#divContent img')
  const bt = document.querySelector('#divContent button')

  // 2. button 클릭이 되는 경우를 찾아야 함
  bt.addEventListener('click', ()=>{
    //랜덤수를 발생 1 ~ 6까지
    const n = Math.floor(Math.random() * 6) + 1 ; 
    console.log(`${n}.png`) ;

    // 3. img src 속성을 변경 
    img.setAttribute('src', `./img/${n}.png`) ;
  }) ;
});