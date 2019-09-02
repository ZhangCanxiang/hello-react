import React from 'react';
import {Card, Button, Modal} from 'antd';
import './index.less';
import './../../../resource/ui.less';
export default class Modals extends React.Component{

    state={
        showModal1:false,
        showModal2:false,
        showModal4:false,
        showModal3:false

    }

    handlerOpen=(type)=>{

            this.setState({
                [type]:true

            })

    }

    handlerConfirm=(type)=>{

           Modal[type]({
                title:'确认？',
                content:"are you ok ",
                onOk(){
                    console.log("ok");
                },
                onCancel(){
                    console.log("Nok")
                }
                
           })
          

    }

    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handlerOpen('showModal1')} >Open</Button>
                    <Button type="primary" onClick={()=>this.handlerOpen('showModal2')}>自定义也叫</Button>
                    <Button type="primary" onClick={()=>this.handlerOpen('showModal3')}>顶部</Button>
                    <Button type="primary" onClick={()=>this.handlerOpen('showModal4')}>剧中</Button>
                
                </Card>
                <Card title="信息确认框" className="card-wrap">
                <Button type="primary" onClick={()=>this.handlerConfirm('confirm')}>confirm</Button>
                <Button type="primary" onClick={()=>this.handlerConfirm('info')}>info</Button>
                <Button type="primary" onClick={()=>this.handlerConfirm('success')}>success</Button>
                <Button type="primary" onClick={()=>this.handlerConfirm('warning')}>warning</Button>
            
            </Card>
                <Modal title="React" visible={this.state.showModal1} onCancel={()=>{
                    this.setState({

                        showModal1:false
                    })

                }}>
                    <p>hell 1</p>
                </Modal>
                <Modal title="React"  kText="好的" cancelText="算了" visible={this.state.showModal2} onCancel={()=>{
                    this.setState({

                        showModal2:false
                    })

                }}>
                    <p>hell 2</p>
                </Modal>
                <Modal title="React" style={{top:20}} visible={this.state.showModal3} onCancel={()=>{
                    this.setState({

                        showModal3:false
                    })

                }}>
                    <p>hell 3</p>
                </Modal>
                <Modal title="React" wrapClassName="vertical-center-modal" visible={this.state.showModal4} onCancel={()=>{
                    this.setState({

                        showModal4:false
                    })

                }}>
                    <p>hell 4</p>
                </Modal>


                
            </div>
        )
    }

}