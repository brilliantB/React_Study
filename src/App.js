// ../ : 상위 폴더
//  ./ : 현재 폴더

import logo from './logo.svg';
import './App.css';
import TodoHeader from './Component/TodoHeader';
import TodoMain from './Component/TodoMain';
import TodoList from './Component/TodoList';
import TodoItem from './Component/TodoItem';
import TodoStatus from './Component/TodoStatus';
import TodoFooter from './Component/TodoFooter';

function App() {
  return (
    <>
    <TodoHeader />
    <TodoMain>
      <TodoList>
        <TodoItem />
      </TodoList>
      <TodoStatus />
    </TodoMain>
    <TodoFooter />
    </>
  );
}

export default App;
