import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Frame from '../layouts/Frame.jsx';
import { Home, Detail,Login } from '../views/index.js';

const Test1 = ({ match }) => {
    console.log(match)
    return <div>test1-component
    </div>
}
const LayOutRouter = () =>
    <Frame>
        <Switch>
            <Redirect from={`/`} to={`/app/preview/newarticles`} exact />
            <Route path={`/app/preview/:id`} exact component={Home} />
            <Route path={`/app/detail/:id`} exact component={Detail} />
        </Switch>
    </Frame>
const routerMap = () => (
    <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={LayOutRouter}></Route>
        </Switch>
    </Router>
);
export default routerMap;
