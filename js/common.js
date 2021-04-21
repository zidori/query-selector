/* query selector 2 */
let num = 0;// 이동 증가 초기값
let directionNum = 1;
let directionRound = 1;
let roundNum = 0;
function textMove(){
  num += 10 * directionNum;
  // if(num > 100){
  //   directionNum = directionNum * (-1);
  // }else if(num <= 0){
  //   directionNum = directionNum * (-1);
  // }
  if(num > 100 || num <= 0){
    directionNum = directionNum * (-1);
  }
  let moveNum = document.querySelector("li .txt")//class name "txt"인 요소를 가져다줌
  //querySelector 는 hierarchy 구조를 받아준다.
  moveNum.style.background = "red";
  moveNum.style.position = "absolute";
  moveNum.style.left = num + 'px';
  roundNum += 20 * directionRound;
  let roundMove = document.querySelector("#round");
  roundMove.style.position = "absolute";
  roundMove.style.left = "40px";
  roundMove.style.top = roundNum + 'px';
  if( roundNum > window.innerHeight || roundNum <= 0){
    directionNum = directionRound * (-1);
  }
}
