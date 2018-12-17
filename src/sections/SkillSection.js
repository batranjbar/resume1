import React,{Component} from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage';
import SkillCard from '../components/SkillCard';
import DownIcon3 from '../components/DownIcon3';

import { Link, Element } from 'react-scroll';
import './SkillSection.css'

class SkillSection extends Component{
    render(){
        return (
                    <div>
        <Fullpage className = "third"> 
        <h1>{data.sections[1].title}</h1>
       <h1></h1>
        <div className="card-wrapper">
        {data.sections[1].items.map(eachskill =>{
            return(
                <SkillCard skill={eachskill}/> 
            );
        })}
        </div>
         </Fullpage> 
         <Link activeClass="active" to="navbar" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
        <DownIcon3 
            icon={data.icons.down}
            onClick={()=>console.log("I AM WORKING")}
             />
        </Link>

            
<Element name="navbar" className="element">

        </Element> 
          </div>
        );
    }
}
export default SkillSection;

