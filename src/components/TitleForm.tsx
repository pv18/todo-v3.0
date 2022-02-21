import React from 'react';
import {Typography} from '@mui/material';

interface TitleFormPropsType {
    title: string
}

export const TitleForm = ({title}: TitleFormPropsType) => {
    return (
        <div className={'center m10'}>
            <Typography variant={'h4'}>{title}</Typography>
        </div>
    );
};

