/* jshint esversion: 6 */
import React from 'react';
export default class Child extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : this.props.name
        };
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    componentWillReceiveProps(newProps){
        console.log('new props'+ newProps);
    }

    shouldComponentUpdate(){
        console.log('shoud update');
        return true;
    }

    componentWillUpdate(){
        console.log('will update');
    }

    componentDidUpdate(){
        console.log('did update');
    }

    render(){
        return <div>
            <p>这是child，child的值是{this.props.name}</p>
            <p>
                {this.props.name}
            </p>
        </div>
    }

}