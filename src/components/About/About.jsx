import React, {Component} from 'react';
import './About.css';
import Menu from '../Menu/Menu'
import bg from '../../images/bg1.jpg'

class About extends Component{
    render(){
        return(
            <div className="aboutPage">
                <img className="bgImg" src={bg} alt="background photo"/>
                <Menu/>
            </div>
        )
    }
}

export default About;