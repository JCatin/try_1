import React, { Fragment } from 'react';
import {Form} from '../components/Form'
import { Tasks } from '../components/Tasks';

export const Home = () => {
    const tasks = new Array(3)
        .fill('')
        .map((_, i ) => ({id: i, title: `Task ${i+1}`}));

    return(
        <Fragment>
            <Form />

            <hr/>

            <Tasks tasks = {tasks} />
        </Fragment>
    );
}