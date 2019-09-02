import React from 'react';

import {Card, Spin, Icon, Alert} from 'antd';

export default class Loading extends React.Component{

    render(){
        const icon = <Icon type="plus" style={{fontSize:24}}></Icon>
        const iconLoading = <Icon type="loading" style={{fontSize:24}}></Icon>

        return (

            <div>
                <Card title="Spin 用法" className="card-wrap">
                    <Spin size="small">Loading</Spin>
                    <Spin>Loading</Spin>
                    <Spin size="large">Loading</Spin>
                    <Spin indicator={icon}>gogogo</Spin>
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React" description="welcome to greate React class" type="info" />
                    <Alert message="React" description="welcome to greate React class" type="warn" />
                    <Alert message="React" description="welcome to greate React class" type="warning" />
                    <Spin>
                    <Alert message="React" description="welcome to greate React class" type="confirm" />
                    </Spin>

                    <Spin tip="LOADDING..." indicator={iconLoading}>
                    <Alert message="React" description="welcome to greate React class" type="confirm" />
                    </Spin>

            </Card>
            </div>

        )
    }
}