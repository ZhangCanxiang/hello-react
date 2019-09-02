import React from 'react';

import {Card, Button, notification} from 'antd';

export default class Notice extends React.Component{

    openNotice=(type,direction)=>{

        if(direction){
            notification.config({
                placement:direction
                
            })
        }
        notification[type]({
            message:"pay balance",
            description:'late 22 day in last month'
        })
    }

    render(){
        return (
            <div>


            <Card title="notice">
            <Button type="primary" onClick={()=>this.openNotice('success')}>success</Button>
            <Button type="primary" onClick={()=>this.openNotice('info')}>info</Button>

            <Button type="primary" onClick={()=>this.openNotice('warning')}>warning</Button>

            <Button type="primary" onClick={()=>this.openNotice('error')}>Error</Button>


        </Card>
                <Card title="notice">
                    <Button type="primary" onClick={()=>this.openNotice('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotice('info','topRight')}>info</Button>

                    <Button type="primary" onClick={()=>this.openNotice('warning','bottomLeft')}>warning</Button>

                    <Button type="primary" onClick={()=>this.openNotice('error','bottomRight')}>Error</Button>


                </Card>
            </div>
        )
    }
}