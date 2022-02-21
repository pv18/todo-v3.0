import React, {MouseEvent} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {changeFilter} from '../../../store/reducers/TasksSlice';

export const TodoFilters = () => {
    const {filter} = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value
        const condition = (value === 'all' || value === 'active' || value === 'completed')
        if (condition) dispatch(changeFilter(value))
    }

    return (
        <ButtonGroup fullWidth variant={'contained'}>
            <Button color={(filter === 'all') ? 'secondary' : 'primary'}
                    value={'all'}
                    onClick={clickHandler}>
                all
            </Button>
            <Button color={(filter === 'active') ? 'secondary' : 'primary'}
                    value={'active'}
                    onClick={clickHandler}>
                active
            </Button>
            <Button color={(filter === 'completed') ? 'secondary' : 'primary'}
                    value={'completed'}
                    onClick={clickHandler}>
                completed
            </Button>
        </ButtonGroup>
    );
};

