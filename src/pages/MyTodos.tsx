import React from 'react';
import {NavBar} from '../components/NavBar';
import {Grid} from '@mui/material';
import {Todo} from '../components/Todo/Todo';

export const MyTodos = () => {
    return (
        <>
            <NavBar/>
            <Grid container mt={3} justifyContent={'center'}>
                <Todo/>
            </Grid>
        </>
    );
};

