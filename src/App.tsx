import React from 'react';
import {MyTodos} from './pages/MyTodos';
import {ThemeProvider} from '@mui/material';
import {themeMyTodos} from './styles/themeMyTodos';

const App = () => {
    return (
        <ThemeProvider theme={themeMyTodos}>
           <MyTodos/>
        </ThemeProvider>
    );
};

export default App;