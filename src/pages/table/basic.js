import React from 'react';
import {Card,Table} from 'antd';
import axios from './../../axios/index';
export default class BasicTable extends React.Component{


    state ={

    }
    componentWillMount(){
        const dataSource =[

            {

                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-01-01',
                address:'henan',
                time:'09:00'
            },
            {

                id:'0',
                userName:'tom',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-01-01',
                address:'henan',
                time:'09:00'
            },
            {

                id:'0',
                userName:'lili',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-01-01',
                address:'henan',
                time:'09:00'
            },
            {

                id:'0',
                userName:'kevin',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-01-01',
                address:'henan',
                time:'09:00'
            },
            {

                id:'0',
                userName:'york',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2019-01-01',
                address:'henan',
                time:'09:00'
            },
        ]

        dataSource.map((item,index)=>{
            item.index=index;
        })
        


        this.setState({
            dataSource
        })
        this.request();
    
    }
// 动态获取数据
    request =() =>{
        
        axios.ajax({
            url:'/table/list',
            data:{
                param:{
                    page:1
                }
            }

        }).then((res)=>{
            console.log(res);
            if(res.code ==='0'){
                res.result.map((item, index)=>{
                    item.index = index
                })
                this.setState({
                    dataSource2:res.result
                })
            }
        })

        // axios.get(baseUrl+"/table/list").then((res)=>{
        //     if(res.status === 200 && res.data.code === "0"){
        
        //         this.setState({
        //             dataSource2:res.data.result
        //         })
        //     }
        // })
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title : 'sex',
                dataIndex:'sex',
                render(sex){
                    return sex === 1?'男':'女';
                }
            },
            {

                title:'state',
                dataIndex:'state',
                render(state){
                    let config = {
                        '1':'秋雨狼人',
                        '2':'风华正茂',
                        '3':'干净利索',
                        '4':'赶快地方',
                        '5':'邹乐奏曲'
                    }
                    return config[state];
                }
            },
            {
                title :'birthday',
                dataIndex:'birthday',
               
            },
            {
                title :'interest',
                dataIndex:'interest',
                render(state){
                    let config = {
                        '1':'华友',
                        '2':'跳绳',
                        '3':'读书',
                        '4':'跑步',
                        '5':'玩游戏'
                    }
                    return config[state];
                }
            },
            {
                title:'address',
                dataIndex:'address'
            },
            {
                title:'time',
                dataIndex:'time'

            }

         ];
         const rowSelection= {
            type:'checkbox'
        };

        return (
            <div>
                <Card>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    >
                    
                    </Table>
                </Card>

                <Card title="donimic table" style={{margin:'10px 0'}}>
                <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource2}
                    pagination={false}
                >
                
                </Table>
            </Card>

                <Card title="Mock-sigle-select" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    >
                    
                    </Table>
                </Card>
            </div>
        )
    }

}