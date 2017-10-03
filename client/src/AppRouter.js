import React from 'react';

//React router for moving through pages in the react app. All pages are supposed to have an entry here
import { Switch, Route } from 'react-router-dom';

//Pages to be routed
import Homepage from './Pages/Homepage';



const AppRouter = () =>
    <Switch>
        <Route exact path='/' component={Homepage}/>
    </Switch>;

export default AppRouter;
