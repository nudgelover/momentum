const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];
//let을 사용하여 update가 가능하도록!

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//JSON.stringify => 값을 string으로 저장하고 싶을 때
// 1) function saveToDos( ) { localStorage.setItem("todos",toDos); } 에 "todos"라는 이름의 카테고리로 저장한다.
// 2) 하지만 이렇게 저장하게 되면 직접 localStorage 에서 확인해봤을 때 값들이 array안에서
// string의 형태가 아닌 상태로 저장된다.
// 예) key: todos value: a,b,c
// 3) 하지만 우리는 값들을 string의 형태로 toDos라는 array에 집어넣고 싶기 때문에 니꼬가 알려준 JSON.stringify() 라는 객체를 사용한다. 이 도구는 우리가 대입한 값을 알아서 string의 형태로 바꿔줄 것이다.
// 예) key: todos value: ["a", "b", "c"]
//4)그 다음, JSON.parse()  함수를 통해서 실제로 우리가 사용할 수 있는 배열로 바꾸어준다.

function deleteTodo(event) {
  //console.dir(event.target.parentElement.innerText); //6-2 강의 어렵다 다시 봐보자
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();

  //.filter 함수를 사용하여 true를 반환시 array를 유지하는 함수를 만들어보자
}

function paintTodo(newTodo) {
  const li = document.createElement('li');

  li.id = newTodo.id;
  
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span); //append는 뒤에 놓여저야함~!
  li.appendChild(button);
  toDoList.appendChild(li);
}

// .appendChild 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임.
// appendChild vs append
// append()가 추가할 수 있는 종류가 더 많음.
// append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있어요. :)
// li.append("추가해주세요") → (가능)
// li.appendChild("추가해주세요") → (불가능 - typeError)

function handleToDoSumit(event) {
  event.preventDefault(); //새로고침 막기
  const newTodo = toDoInput.value; //summit하는 텍스트 저장
  toDoInput.value = ''; //텍스트상자 안의 텍스트 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //date.now라는 함수를 이용해서 id를 자동생성해주고
  //배열을  ["가","나",...] => [text ="가" id =22222, ....이런 식(object)으로 변경]
  toDos.push(newTodoObj); //array로 값 push
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
