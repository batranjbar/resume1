import React, { Component } from 'react'
import App from './App';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Test from './Test';

const AppRouter=()=>{
    return(
        <div>
            <BrowserRouter>   
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/app" component={App} />
                    <Route path="/test" component={Test} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;