document.addEventListener('DOMContentLoaded', ()=>{
  // DOM 요소 가져오기
  const txt1 = document.querySelector('#txt1') ;
  const btAdds = document.querySelectorAll('.btAdd') ;
  const btDels = document.querySelectorAll('.btDel') ;
  const btChanges = document.querySelectorAll('.btChange') ;

  // 배열 만들기
  let arr = [] ;

  // 오브젝트 만들 
  let obj = {
    '사과' : '🍎',
    '바나나' : '🍌',
    '오렌지' :'🍊' ,
    '수박' :'🍉',
    '오이' :'🥒',
    '당근' :'🥕',
    '가지' :'🍆',
    '브로콜리' :'🥦',
  }

  // 추가버튼
  for(let bt of btAdds) {
    bt.addEventListener('click', () => {
      console.log(bt.textContent);

      // if (bt.textContent == '사과') {
      //   arr.push('🍎');
      // }
      // else if (bt.textContent == '바나나') {
      //   arr.push('🍌');
      // }
      // else if (bt.textContent == '오렌지') {
      //   arr.push('🍊');
      // }
      // else if (bt.textContent == '수박') {
      //   arr.push('🍉');
      // }
      // console.log(arr)

      arr.push(obj[bt.textContent]) ;

      txt1.value =arr.join(' ')
    }) ;
  }

  // 삭제버튼
  for(let bt of btDels) {
    bt.addEventListener('click', ()=>{
    
    const btkey = bt.textContent.replace('삭제','') ; 
    console.log(btkey)

    //arr = arr.filter((item) => {return item != obj[btkey]}) ;
    arr = arr.filter(item => item != obj[btkey]) ;
    
    txt1.value =arr.join(' ')   

    }) ;
  }

  // 변경버튼
  for(let bt of btChanges) {
    bt.addEventListener('click', ()=>{
      const w1 = bt.textContent.split('→')[0] ;
      const w2 = bt.textContent.split('→')[1] ;
      console.log(w1, w2)

      // arr = arr.map((item) => {return item == obj[w1] ? obj[w2] : item}) ;
      arr = arr.map(item => item == obj[w1] ? obj[w2] : item) ;
      txt1.value =arr.join(' ')   

    })
  }
}); 