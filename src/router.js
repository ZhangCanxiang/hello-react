import React from 'react';
import {HashRouter, Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons/index';
import Nomatch from './pages/nomatch';
import Modals from './pages/ui/buttons/modals';
import Loading from './pages/ui/buttons/loading';
import Notice from './pages/ui/buttons/notice';
import Message from './pages/ui/buttons/message';
import Tab from './pages/ui/buttons/tabs';
import Glallery from './pages/ui/buttons/gallery';
import Carsousel from './pages/ui/buttons/carouse';
import FormLogin from './pages/form/login';
import Register from './pages/form/register';
import BasicTable from './pages/table/basic';
export default class IRouter extends React.Component{
    render () {
        return (
            <HashRouter>
                <App>
                    <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() =>
                    <Admin>
                        <Switch>
                        <Route path="/admin/ui/buttons" component={Buttons}></Route>
                        <Route path="/admin/ui/modals" component={Modals}></Route>
                        <Route path="/admin/ui/loadings" component={Loading}></Route>

                        <Route path="/admin/ui/notification" component={Notice}></Route>
                        <Route path="/admin/ui/messages" component={Message}></Route>
                        <Route path="/admin/ui/tabs" component={Tab}></Route>
                        <Route path="/admin/ui/gallery" component={Glallery}></Route>
                        <Route path="/admin/ui/carousel" component={Carsousel}></Route>
                        <Route path="/admin/form/login" component={FormLogin}></Route>
                        <Route path="/admin/form/reg" component={Register}></Route>
                        <Route path="/admin/table/basic" component={BasicTable}></Route>
        
                        <Route  component={Nomatch}></Route>

                        </Switch>
                       
                    </Admin>
                    }></Route>
                    <Route path="/order/detail" component={Login}></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
