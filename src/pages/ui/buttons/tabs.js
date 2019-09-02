import React from 'react';
import {Card, message, Tabs, Icon} from 'antd';
import './index.less';
import './../../../resource/ui.less';

const TabPane = Tabs.TabPane;
export default class Tab extends React.Component{


    newTabIndex = 0;
    onEdit=(targetkey, action)=>{

        this[action](targetkey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
      };
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    onChange=(acticeKey)=>{
        this.setState({
            acticeKey    
        })
    };

    handleCallback =(key) =>{
         message.success("hi you chose tab"+ key)
    }

    componentWillMount () {
        const panes = [
            {
                title:'TAB1',
                content:'tab1',
                key:'1'
            },
            {
                title:'TAB2',
                content:'tab2',
                key:'2'
            },
            {
                title:'TAB3',
                content:'tab3',
                key:'3'
            }

        ]
        this.setState({
            panes,
            acticeKey:panes[0].key
        })
    }

    render(){
        return (

            <div>
                <Card title="tabs" className="card-wrap">
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab ="tab1" key="1" onClick={()=>this.handleCallback}>
                            welcome to study react
                        </TabPane>
                            <TabPane tab ="tab2" disabled={true} key="2" onClick={()=>this.handleCallback}>
                            welcome to study react
                        </TabPane>
                        <TabPane tab ="tab3" key="3" onClick={()=>this.handleCallback}>
                        welcome to study react
                        </TabPane>

                    </Tabs>
                </Card>

                <Card title="with icon tabs" className="card-wrap">
                <Tabs defaultActiveKey='1'>
                    <TabPane tab = {<span>
                            <Icon type='plus'>tab1</Icon>
                        </span>} key="1" onChange={()=>this.handleCallback("1")}>
                        welcome to study react
                    </TabPane>
                        <TabPane tab ={<span>
                            <Icon type='edit'>tab2</Icon>
                        </span>} key="2" onChange={()=>this.handleCallback('2')}>
                        welcome to study react
                    </TabPane>
                    <TabPane tab ="tab3" key="3" onChange={()=>this.handleCallback('3')}>
                    welcome to study react
                    </TabPane>

                </Tabs>
            </Card>

            <Card title="cycle auto edit tab" className="card-wrap">
            <Tabs activeKey={this.state.acticeKey} onChange={this.onChange} type='editable-card' onEdit={this.onEdit}>
                    {
                        this.state.panes.map((panel)=>{
                            return <TabPane 
                                tab={panel.title}
                                key={panel.key}
                            ></TabPane>
                        })
                    }        
            </Tabs>
        </Card>

            </div>
        )
    }
}