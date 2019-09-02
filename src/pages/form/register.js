import React from 'react';
import {Card,Form,Checkbox, Radio, Input, Select, Switch, TimePicker,Icon,message, InputNumber} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FormRegister extends React.Component{
   

    render(){
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }

        }
        const  { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title ="注册表单">
                    <Form layout='horizontal'>
                        <FormItem label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('userName', {
                                initialValue:'',
                                rules:[{
                                    required:true,
                                },{
    
                                    pattern:new RegExp('^\\w+$','g')
                                }]
                            })(
                                <Input placeholder='请输入用户名' />
                            )
                        }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator('pwd', {
                                initialValue:'',
                                rules:[{
                                        required:true
    
                                },{min:5,max:10},{
    
                                    pattern:/^\w+$/g
                                }]
                            })(
                                <Input placeholder='请输入密码' />
                            )
                        }
                     
                    </FormItem>

                    <FormItem label="性别" {...formItemLayout}>
                    {
                        getFieldDecorator('sex', {
                            initialValue:'1',
                          
                        })(
                            <RadioGroup>
                                <Radio value='1'>man</Radio>
                                <Radio value='2'>women</Radio>
                            </RadioGroup>
                        )
                    }
                 
                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                {
                    getFieldDecorator('age', {
                        initialValue:18,
                    
                    })(
                      <InputNumber></InputNumber>
                    )
                }
             
            </FormItem>

            <FormItem label="当前状态" {...formItemLayout}>
            {
                getFieldDecorator('state', {
                    initialValue:['2','5'],
                
                })(
                    <Select mode="multiple">
                        <Option value="1">咸鱼1条</Option>
                        <Option value="2">咸鱼2条</Option>
                        <Option value="3">咸鱼3条</Option>
                        <Option value="4">咸鱼4条</Option>
                        <Option value="5">咸鱼5条</Option>
                    
                    </Select>
                )
            }
         
        </FormItem>
                    </Form>
                </Card>
            </div>)
    }
}


export default Form.create()(FormRegister)
