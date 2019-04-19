import React, { Component } from 'react';
import data from "../data.json";
import './MenuBarSection.css'
import DownIcon2 from '../components/DownIcon2';
import DownIcon3 from '../components/DownIcon3';

import { Link, Element } from 'react-scroll';


class MenuBarSection extends Component {
    render() {

        return (

            <div class="navbar">

                <div>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <a >About</a>
                    </Link>
                    <Element name="about" className="element" > </Element>
                </div>

                <div>
                    <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <a >Skills</a>
                    </Link>
                    <Element name="skill" className="element"></Element>
                </div>
                <div className="div-img"

                    onClick={this.props.changebackgroundColor}
                >
                    <a><img src="/images/brush1.png" align="left"></img></a>

                </div>

            </div>



        )
    }
}
export default MenuBarSection;

