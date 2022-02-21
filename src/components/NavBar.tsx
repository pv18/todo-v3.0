import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={'static'}>
                <Toolbar variant={'dense'}>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

