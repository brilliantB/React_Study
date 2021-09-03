// ../ : 상위 폴더
//  ./ : 현재 폴더

import logo from './logo.svg';
import './App.css';
import TodoHeader from './Component/TodoHeader';
import TodoMain from './Component/TodoMain';
import TodoList from './Component/TodoList';
// import TodoItem from './Component/TodoItem';
import TodoStatus from './Component/TodoStatus';
import TodoFooter from './Component/TodoFooter';

import {useState, useRef} from 'react';

function App() {

  const [todoArray, setTodoArray] = useState([
    {
        id: 1,
        todoContent: '할일 1'
    },
    {
        id: 2,
        todoContent: '할일 2'
    },
    {
        id: 3,
        todoContent: '할일 3'
    }
  ]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수 
  const [todoInput, setTodoInput] = useState({
      todoContent:''
  });

  // 구조 분해 할당
  const {todoContent} = todoInput;

  // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeTodo = (e)=>{
  
    const {name, value} = e.target;

    setTodoInput({
        ...todoInput,
        [name]:value
    });
  }

  const nexId = useRef(4);

  const [number, setNumber] = useState(3);

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  const addTodo = () => {
    // 기본 데이터 배열에 넣어줄 객체
    const newTodo = {
      id: nexId.current,
      todoContent: todoContent
    }

    setTodoArray([...todoArray, newTodo]);

    setTodoInput({
      todoContent:''
    });

    setNumber(number + 1);

    nexId.current++;
  }

  const removeTodo = (id)=>{
    // filter 내장 함수 : 조건에 맞는 데이터만 추출해서 새로운 데이터(배열) 생성
    setTodoArray(
      todoArray.filter(function(todo){
        return(
          todo.id !== id
        );
      })
    );
    setNumber(number - 1);
  }

  return (
    <>
    <TodoHeader todoContent={todoContent} changeTodo={changeTodo} addTodo={addTodo} />
    <TodoMain>
      <TodoList todoArray={todoArray} removeTodo={removeTodo} />
      <TodoStatus number={number} />
    </TodoMain>
    <TodoFooter />
    </>
  );
}

export default App;
