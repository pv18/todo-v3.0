import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

export const TodoFilters = () => {
    return (
        <ButtonGroup fullWidth variant={'contained'}>
            <Button>all</Button>
            <Button>active</Button>
            <Button>completed</Button>
        </ButtonGroup>
    );
};

