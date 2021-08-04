import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    
    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(enteredUserName.trim().length===0||enteredAge.trim().length===0)
        {
            setError({
                title: "Invalid input!",
                message:"Please enter valid name and age (non-empty values)."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age!",
                message:"Please enter valid age ( >0 )."
            })
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }
  
    const handleChangeUserName = (event) => {
        setEnteredUserName(event.target.value);
    }
    const handleChangeAge = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }
    console.log(error);
    return (
        <div>
            {error &&
                <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
            }
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            id="username"
                            value={enteredUserName}
                            onChange={handleChangeUserName}
                        />
                            <label htmlFor="age">Age(Years)</label>
                        <input
                            type="number"
                            id="age"
                            value={enteredAge}
                            onChange={handleChangeAge}
                        />
                            <Button type="submit">Add User</Button>
                    </form>
                    </Card>
            </div>
    );
}

export default AddUser;