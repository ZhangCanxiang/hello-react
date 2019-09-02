import React from 'react';
import { Row, Col } from 'antd';
import Util from './../../utils/utils';
import './index.less';
import axios from './../../axios';
export  default class Header extends React.Component{

    state={}
    componentWillMount(){
        this.setState(
            {
                userName:'火山之家'
            }
        )
        setInterval(() => {

            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            }  
            )
        }, 1000);
        this.getWeatherApiData();
    }

      getWeatherApiData(){
        //let city = 'beijing';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
            
        }).then((res)=>{
                console.log(res);
                if (res.status === 'success') {
                    console.log(res.result);
                    let data = res.results[0].weather_data[0];
                    this.setState({
                        dayPictureUrl:data.dayPictureUrl,
                        weather:data.weather
                    })
                }
        })
    }

    render(){
        return (
            <div className="header">
                <Row className="header-top">
                   <Col span={24}>
                    <span>欢迎，{this.state.userName}</span>
                    <span><a href="#">退出</a></span>
                   </Col>
                </Row>
                <Row className="breadcrumb">
                <Col span={4} className="breadcrumb-title">
                    首页
               </Col>
                <Col span={20} className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span className="weather-img">
                        <img src={this.state.dayPictureUrl} alt="" />
                       
                    </span>
                    <span classNam="weather-w"> {this.state.weather}</span>
                </Col>
                </Row>
            </div>

        );
    }
}