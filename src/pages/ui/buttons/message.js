import React from 'react';
import {Card, Button, message} from 'antd';
import './index.less';
//import ReconnectingWebSocket from "reconnecting-websocket";
import {initwebsocket,send} from './wbclient';
export default class Message extends React.Component{


    showMessage =(type)=>{
        message[type]('ok');
    }

  
    render(){
        return (
            <div>
                <Card title="全局提示框" className="card-wrap"> 
                    <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>loading</Button>
                </Card>
                <Card title="全局提示框" className="card-wrap"> 
                 <Button type="primary" onClick={
                   ()=> initwebsocket()
                 }>cn</Button>
                 <Button type="primary" onClick={()=>send('loading')}>sd</Button>

                </Card>
            </div>
        )
    }
}