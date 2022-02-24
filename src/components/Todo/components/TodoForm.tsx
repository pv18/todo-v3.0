import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {useAppDispatch} from '../../../hooks/redux';

export const TodoForm = () => {
    // const [title, setTitle] = useState<string>('');
    // const [error, setError] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    // Functions
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }
    const clickHandler = () => {

    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // if (e.key === 'Enter') clickHandler()
    }
    return (
        <div className={'flex'}>
            <TextField fullWidth
                       size={'small'}
                       label={'add Task'}
                       placeholder={'add Task...'}
                       // error={error}
                       // value={title}
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

