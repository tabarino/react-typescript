import React from 'react';
import Todo from '../../models/Todo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
