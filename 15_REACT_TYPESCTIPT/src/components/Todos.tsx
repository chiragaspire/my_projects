import React,{useContext} from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todo-context';
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (

        <ul className={classes.todos}>
            {todosCtx.items.map(item => {
                
                return (
                    <TodoItem text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
                
                )
            })}
            
            
        </ul>
    )
}

export default Todos;