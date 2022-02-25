import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {useAppDispatch} from '../../../hooks/redux';
import {addTask, tasksSlice} from '../../../store/reducers/TasksSlice';

interface TodoFormPropsType {
    todolistID: string
}

export const TodoForm = ({todolistID}: TodoFormPropsType) => {
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    // Functions
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const clickHandler = () => {
        if (title.trim().length) {
            dispatch(addTask({title, todolistID}))
            setTitle('')
        } else {
            setError(true)
        }
    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') clickHandler()
    }
    return (
        <div className={'flex'}>
            <TextField fullWidth
                       size={'small'}
                       label={'add Task'}
                       placeholder={'add Task...'}
                       error={error}
                       value={title}
                       onChange={changeHandler}
                       onKeyPress={keyPressHandler}
            />
            <Button variant={'contained'}
                    size={'small'}
                    onClick={clickHandler}
            >
                +
            </Button>
        </div>
    );
};

