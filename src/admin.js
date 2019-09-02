import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import NavLeft from './components/navleft';
import './style/common.less';
//import Home from './pages/home';
export default class Admin extends React.Component{
    render () {
        return (
            <Row className="container">
                <Col span = {4} className ="nav-left"><NavLeft /></Col>
                <Col span = {20} className="main">
                    <Header span={20}></Header>
                    <Row className="content">
                       {/** <Home></Home>*/}
                       {this.props.children}
                    </Row>
                    <Footer span={20}></Footer>
                </Col>
            </Row>
        );
    }
}
