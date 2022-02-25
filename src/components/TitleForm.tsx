import React from 'react';
import {IconButton, Typography} from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import {useAppDispatch} from '../hooks/redux';
import {removeTodolist} from '../store/reducers/TodosSlice';

interface TitleFormPropsType {
    title: string
    todolistID: string
}

export const TitleForm = ({title, todolistID}: TitleFormPropsType) => {
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = () => {
        dispatch(removeTodolist({todolistID}))
    }
    return (
        <div className={'center m10'}>
            <Typography variant={'h4'}>{title}</Typography>
            <IconButton size={'small'} onClick={clickHandler}>
                <DeleteForeverSharpIcon/>
            </IconButton>
        </div>
    );
};

