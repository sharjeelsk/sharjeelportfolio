import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from './App'
import Form from './components/Form'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route path = "/contact" component={Form} />
            </Switch>
        </div>
    );
}

export default Router;