import React from 'react';

import {Card, Carousel} from 'antd';
import './index.less';
export default class Carsousels extends React.Component{

    render(){
        return (

            <div>   
                <Card title="carsousel" className="card-wrap">
                <Carousel autoplay effect='fade'>
                <div>
                    <h3>A</h3>
                 </div>
                <div>
                    <h3>B</h3>
                </div>
                <div>
                    <h3>C</h3>
                </div>
                <div>
                    <h3>D</h3>
                </div>
            
                </Carousel>
                
                </Card>


                <Card title="picture carousel" className="slide-wrap">
                <Carousel autoplay effect='fade' >
                <div>
                    <img src="/gallery/1.png" alt="love beatiful flower"></img>
                 </div>
                <div>
                <img src="/gallery/2.png" alt="love beatiful flower"></img>

                </div>
                <div>
                <img src="/gallery/3.png" alt="love beatiful flower"></img>

                </div>
                <div>
                <img src="/gallery/4.png" alt="love beatiful flower"></img>

                </div>
            
                </Carousel>
                
                </Card>
            </div>
        )
    }
}