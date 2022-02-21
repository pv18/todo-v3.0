import React from 'react';
import {Button, TextField} from '@mui/material';

export const TodoForm = () => {
    return (
        <div className={'flex'}>
            <TextField fullWidth size={'small'}/>
            <Button variant={'contained'} size={'small'}>+</Button>
        </div>
    );
};

