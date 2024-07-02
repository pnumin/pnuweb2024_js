/* 
업다운게임 
1. DOM 요소 가져오기
2. 확인 버튼 처리
   - 확인 버튼 내용이 '확인'이 아니면 초기화 
   - 랜덤수 생성 (초기화되기 전까지 한번만 생성)=> flag변수
   - 텍스박스의 숫자와 비교 : 크면 -> 다운, 같으면 ->성공, 작으면 ->업 
   - 비교후 이미지 변경

3. 성공하면
   - 텍스트 박스를 숨김
   - 버튼의 글자를 변경

4. 초기화 
   - 이미지는 what
   - 텍스트 상자가 보이게
   - 버튼의 이름을 확인으로 
   - 랜덤 변수가 생성될 수 있도록 => flag변수
*/

document.addEventListener('DOMContentLoaded', ()=>{
  //1. DOM 요소 가져오기
  const img = document.querySelector('img') ;   //태그 selector
  const txt1 = document.querySelector('input[type=number]') ; //속성 selector
  const btok = document.querySelector('#btok'); //id selector
  const btcancel = document.querySelector('button[type=reset]') ;

  //랜덤수 생성 제어 변수
  let flag = true ;   //true이면 랜덤수 생성가능, flase이면 랜덤수 생성불가

  //랜덤수
  let n = 0 ;

  //초기화 함수 
  // - 이미지는 what
  // - 텍스트 상자가 보이게
  // - 버튼의 이름을 확인으로 
  // - 랜덤 변수가 생성될 수 있도록 => flag변수
  const init = () => {
    img.setAttribute('src', './img/what.png') ;
    txt1.value = '' ;
    txt1.style.display = 'inline' ;
    btok.textContent = '확인' ;
    btcancel.style.display = 'inline' ;
    flag = true ;

  }

  // 2. 확인 버튼 처리
  btok.addEventListener('click', (e)=>{
    e.preventDefault();

    //확인버튼이 아닌경우
    if (btok.textContent != '확인') {
      init(); //초기화함수 호출
      return ;
    }

    //랜덤수 생성 (초기화되기 전까지 한번만 생성)=> flag변수
    if(flag) {
      n = Math.floor(Math.random() * 100) + 1 ; //1 ~100까지 랜덤수 생성
      console.log(n)
      flag = false ;
    }

    // 숫자 입력 확인
    if (txt1.value == '') {
      alert('숫자를 입력하세요.');
      txt1.focus();
      return ;
    }
    
    //비교
    let usern = parseInt(txt1.value) ;  //사용자입력수
    console.log(n, usern) ;
    if ( n > usern ) { // up
      img.setAttribute('src', './img/up.png') ;
    }
    else if ( n < usern) { //down
      img.setAttribute('src', './img/down.png') ;
    }
    else {  //성공
      img.setAttribute('src', './img/good.png') ;
      txt1.style.display = 'none' ;
      btok.textContent = '번호를 다시 생성하세요.' ;
      btcancel.style.display = 'none' ;
     }

  }) ;
}) ;