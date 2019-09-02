import React from 'react';
import About from './../router1/about';
import Topic from './../router1/topic';
import Main from './Main';
import Home from './Home';
import  {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Info from './info';
import NoMatch from './NoMatch';
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/main" render={()=>
                            <Main>
                            <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
         
        )
    }
}