import React, { useContext } from 'react';
import TodosContext from '../../store/TodosContext';
import TodoItem from '../TodoItem/TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
