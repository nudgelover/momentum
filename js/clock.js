const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  //padStart => 자바스크립트에게 padding을 신청하는 함수
  //String의 길이를 2로 늘려주고, 그 공간으로 0으로 채움.
  //number에는 할 수 없으니 String으로 변환

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//이걸 안하면 새로고침 시 1초 뒤에 실행됨. 즉 새로고침하자마자 바로 시작
setInterval(getClock, 1000);
