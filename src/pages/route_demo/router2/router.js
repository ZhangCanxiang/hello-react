import React from 'react';
import About from './../router1/about';
import Topic from './../router1/topic';
import Main from './Main';
import Home from './Home';
import  {HashRouter as Router, Route} from 'react-router-dom';
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    <Route path="/main/a" component={About}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                    <Route path="/main" render={()=>
                        <Main>
                            <div>
                                this is sub element
                            </div>
                        </Main>
                    }></Route>
    
                </Home>
            </Router>
         
        )
    }
}