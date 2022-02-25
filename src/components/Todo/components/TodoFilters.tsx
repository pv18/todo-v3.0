import React, {MouseEvent} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useAppDispatch} from '../../../hooks/redux';
import {changeTodolistFilter} from '../../../store/reducers/TodosSlice';

interface TodoFiltersPropsType {
    todolistID: string
}

export const TodoFilters = ({todolistID}: TodoFiltersPropsType) => {
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const filter = e.currentTarget.value
        const condition = (filter === 'all' || filter === 'active' || filter === 'completed')
        if (condition) dispatch(changeTodolistFilter({todolistID, filter}))
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

