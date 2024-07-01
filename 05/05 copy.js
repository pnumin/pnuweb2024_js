let x = 10 ;
console.log("x1=", x) ;
// var x = 10 ;
console.log("x2=", x) ;


/* 반복문 */
let arr = [10, 20, 30] ;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//전통적인 반복문
console.log('** 전통적인 반복문 **') ;
for(let i = 0 ; i < arr.length ; i++) {
  console.log(arr[i]);
}

//for ... in
console.log('** for in 반복문 **') ;
for(let i in arr) {
  console.log(arr[i]);
}

//foreach 
console.log('** forEach 반복문 **') ;
arr.forEach((item, i) => {console.log(`${i} => ${item}`);})

//for.. of
console.log('** for of 반복문 **') ;
for(let i of arr) {
  console.log(i);
}

for (let [i, item] of arr.entries() ) {
  console.log(`${i} => ${item}`);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const msg = document.querySelector('#msg') ;

  msg.innerHTML = '<h1 style="color:blue;">메시지영역</h1>'
  // msg.innerText = '<h1 style="color:blue;">메시지영역</h1>'
  //msg.textContent = '<h1 style="color:blue;">메시지영역</h1>'
}) ;