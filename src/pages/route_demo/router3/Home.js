import React from 'react';
import { Link} from 'react-router-dom';

export default class Home extends React.Component{

    render(){
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topic">topic</Link>
                        </li>
                        <li>
                        <Link to="/error">error</Link>
                         </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
        );
    }
}