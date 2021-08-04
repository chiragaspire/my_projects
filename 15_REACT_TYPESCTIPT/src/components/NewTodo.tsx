import React, { useRef,useContext } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './NewTodo.module.css';
import {TodosContext} from '../store/todo-context'
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const textInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    }
    return (
        <form onClick={submitHandler} className={classes.form}>
            <label htmlFor="text">Enter Text</label>
            <input
                type="text"
                id="text"
                ref={textInputRef}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;