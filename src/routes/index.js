import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Frame from '../layouts/Frame.jsx';
import { Home, Detail } from '../views/index.js';

const Test1 = ({ match }) => {
    console.log(match)
    return <div>test1-component
    </div>
}
const LayOut = () =>
    <Frame>
        <Switch>
            <Redirect from={`/`} to={`/preview/newarticles`} exact />
            <Route path={`/preview/:id`} exact component={Home} />
            <Route path={`/detail/:id`} exact component={Detail} />
            <Route path={`/test`} exact component={Test1} />
        </Switch>
    </Frame>

console.log(Home)
const routerMap = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LayOut}></Route>
        </Switch>
    </Router>
);
export default routerMap;
