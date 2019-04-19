import React,{Component} from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage';
import DownIcon from '../components/DownIcon';
import { Link, Element } from 'react-scroll';
import './TitlesSection.css'


class TitlesSection extends Component{
    constructor(){
        super()

    this.state = {
        color : 'white'
    }
    this.changeColor = this.changeColor.bind(this)
    }
    changeColor = () =>{
        this.setState({
            color : this.state.color==='white' ? 'yellow' : 'white'
        })
    }
    render(){
        return (
            <div>
            <Fullpage className = "first" backgroundColor={this.props.backgroundColor} >   
            <h1 className="title"
             style={{
                color: this.state.color
            }}
            onMouseOver={this.changeColor}
                
             onMouseLeave={()=>{
                this.changeColor()
            }} 
    
            > {data.title}</h1>
            <h2 className="title"> {data.subtitle}</h2>
    
            <div className="icons-wrapper">     
            {Object.keys(data.links).map(key=>{
            return(
            <SocialIcon url={data.links[key]}/> 
            );
            })}  
            </div> 
            </Fullpage>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <DownIcon 
            icon={data.icons.down}
            onClick={()=>console.log("I AM WORKING")}
             />
        </Link>

        <Element name="about" className="element">

        </Element>
            </div>
        ); 
    }
}
export default TitlesSection;

