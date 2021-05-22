import Todos from './components/Todos/Todos';
import NewTodo from './components/NewTodo/NewTodo';
import Todo from './models/Todo';
import './App.css';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ];

  const addTodoHandler = (todoText: string) => {

  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
