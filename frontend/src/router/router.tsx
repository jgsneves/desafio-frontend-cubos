import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

const Router = () => (
    <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/movies/:id' component={MovieDetail} />
    </BrowserRouter>
);

export default Router;