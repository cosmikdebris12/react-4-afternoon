import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

import ClassList from './components/ClassList/ClassList.js'
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Student from './components/Student/Student.js';


export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/classlist/:class' component={ClassList} />
        <Route path='/student/:id' component={Student} />
    </Switch>
)
