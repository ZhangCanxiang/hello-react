import React from 'react';

import {Card, Button, Radio} from 'antd';
import './index.less';
export default class Buttons extends React.Component{


    state = {
        loading:true,
        size:'default'
    }
    handCloseLoad=()=>{
        this.setState({
            loading:false
        })
    }

    handlerChange=(e)=>{
        this.setState({
            size:e.target.value

        })
    }

    render(){
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Icom</Button>
                    <Button >Icom</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>disabled</Button>
                </Card>
                <Card title="图形按钮">
                <Button icon="plus">创建</Button>
                <Button icon="edit">编辑</Button>
                <Button icon="delete">删除</Button>
                <Button shape="circle" icon="search"></Button>

                <Button type="primary" icon="search">搜索</Button>
                <Button type="primary" icon="download">下载</Button>
            </Card>

            <Card title="loading按钮">
            
                <Button type="primary" loading={this.state.loading}>confirm</Button>
                <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                <Button loading={this.state.loading}>点击加载</Button>
                <Button shape="circle" loading={this.state.loading}></Button>
                <Button type="primary" onClick={this.handCloseLoad}>close</Button>

        
        </Card>

         <Card title="按钮组">
            <Button.Group>
                <Button type="primary" icon="left">back</Button>
                <Button icon="right">next</Button>
            </Button.Group>
        </Card>

        <Card title="按钮尺寸">
                <Radio.Group value={this.state.size} onChange={this.handlerChange}>
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>
                </Radio.Group>
            <Button type="primary" size={this.state.size}>go</Button>
            <Button type="primary" size={this.state.size}>abc</Button>
    </Card>
            </div>

        )
     }
}