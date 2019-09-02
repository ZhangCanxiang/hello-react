import React from 'react';
import {Card, Form, Button, Input, message,Icon, Checkbox} from 'antd';
const FormItem = Form.Item;

class FromLogin extends React.Component{
    onHandleSubmit =()=>{
         let userInfo = this.props.form.getFieldsValue();   
         this.props.form.validateFields((err, values)=>{

            if(!err){
                message.success(`${userInfo.userName} ok` )
            }
         })
    }


    render(){
        const { getFieldDecorator } = this.props.form;

       
        return (

            <div>
                <Card>
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                        <Input placeholder='请输入密码' />
                    </FormItem>
                    <FormItem>
                    <Button type="primary">登录 </Button>
                </FormItem>
                    </Form>
                </Card>


                <Card title ="水平登录" style={{marginTop:10}}>
                <Form layout="horizontal" style={{width:300}}>
                    <FormItem>
                    {
                        getFieldDecorator('userName', {
                            initialValue:'',
                            rules:[{
                                required:true,
                            },{

                                pattern:new RegExp('^\\w+$','g')
                            }]
                        })(
                            <Input prefix={<Icon type="user"></Icon>} placeholder='请输入用户名' />
                        )
                    }
                        
                    </FormItem>
                    <FormItem>
                    {
                        getFieldDecorator('password', {
                            initialValue:'',
                            rules:[{
                                    required:true

                            },{min:5,max:10},{

                                pattern:/^\w+$/g
                            }]
                        })(
                            <Input prefix ={<Icon type="lock"></Icon>} placeholder='请输入密码' />
                        )
                    }
                 
                </FormItem>

                <FormItem>
                {
                    getFieldDecorator('remember', {
                        initialValue:true,
                        valuePropName:'checked'
                    })(
                        <Checkbox>remeber password</Checkbox>
                    )
                }
                <a href="#" style={{float:'right'}}>forget password</a>
            </FormItem>

                <FormItem>
                <Button type="primary" onClick={this.onHandleSubmit}>登录 </Button>
            </FormItem>
                </Form>
            </Card>
            </div>
        )
    }
}

export default Form.create()(FromLogin);