import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch, HashRouter} from 'react-router-dom';
import {Gallery} from "../routes/Dashboard/components/Gallery";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={HashRouter}>
                <div>
                    <Switch>
                        <Route path="/" exact component={Gallery}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}