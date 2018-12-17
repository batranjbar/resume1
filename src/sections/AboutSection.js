import React,{Component} from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage';
import DownIcon1 from '../components/DownIcon1';
import { Link, Element } from 'react-scroll';
class AboutSection extends Component{
    render(){
        return (
                        <div>   

         <Fullpage className = "second"> 
       
        <h1>{data.sections[0].title}</h1>
        <div className="paragraphs">  
        {data.sections[0].items.map(p=>{
        return (<p><strong>{p.content}</strong></p>);
         })}
         </div>
         </Fullpage>
      <Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
        <DownIcon1 
            icon={data.icons.down}
            onClick={()=>console.log("I AM WORKING")}
             />
        </Link>

            
       <Element name="skill" className="element">

        </Element> 
        </div>     
        ) 
    }
}
export default AboutSection;

