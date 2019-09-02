import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import About from './about';
import Topic from './topic';
import Main from './Main';
export default class Home extends React.Component{

    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topic">topic</Link>
                        </li>
                       

                    </ul>
                    <hr/>
                
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>

                </div>
            </HashRouter>
        );
    }
}