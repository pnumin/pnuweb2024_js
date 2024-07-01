const convert = (sel1, sel2, lb1, lb2, txt1, txt2) => {
  if (sel1.value === '℃') { //섭씨온도 -> 화씨온도
    sel2.value = '℉';
    lb1.textContent = '℃';
    lb2.textContent = '℉';
  }
  else {  //화씨온도 -> 섭씨온도
    sel2.value = '℃';
    lb1.textContent = '℉';
    lb2.textContent = '℃';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //select box
  const sel1 = document.querySelector('#sel1');
  const sel2 = document.querySelector('#sel2');

  //input
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  //label
  const lb1 = document.querySelector('#lb1');
  const lb2 = document.querySelector('#lb2');

  sel1.addEventListener('change', () => {  
    convert(sel1, sel2, lb1, lb2) ; 
    if (txt1.value != '' && lb1.textContent == '℃') {
      txt2.value = (9/ 5) * txt1.value + 32  ;
    } 
    else if (txt1.value != '' && lb1.textContent == '℉') {
      txt2.value = (txt1.value - 32) * ( 5/ 9)  ; 
    }
  })

  sel2.addEventListener('change', () => {  
    convert(sel2, sel1, lb2, lb1) ; 
    if (txt1.value != '' && lb1.textContent == '℃') {
      txt2.value = (9/ 5) * txt1.value + 32  ;
    } 
    else if (txt1.value != '' && lb1.textContent == '℉') {
      txt2.value = (txt1.value - 32) * ( 5/ 9)  ; 
    }
  })

});