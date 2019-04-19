import React,{Component} from 'react';
import SnowStorm from 'react-snowstorm';
import './Fullpage.css'

class Fullpage extends Component{
   
    render(){
        const {children} = this.props;
        return (
         <div className={`fullpage ${this.props.className || ``}`}
          style={{
                backgroundColor: this.props.backgroundColor
            
            }}
         > 
          <SnowStorm>
                  
        </SnowStorm >

         {children}
          </div>

        ) 
    }
}
export default Fullpage;
