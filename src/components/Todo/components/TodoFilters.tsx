import React, {MouseEvent} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useAppDispatch} from '../../../hooks/redux';

export const TodoFilters = () => {
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value
        const condition = (value === 'all' || value === 'active' || value === 'completed')
    }

    return (
        <ButtonGroup fullWidth variant={'contained'}>
            <Button color={'primary'}
                    value={'all'}
                    onClick={clickHandler}>
                all
            </Button>
            <Button color={'primary'}
                    value={'active'}
                    onClick={clickHandler}>
                active
            </Button>
            <Button color={'primary'}
                    value={'completed'}
                    onClick={clickHandler}>
                completed
            </Button>
        </ButtonGroup>
    );
};

