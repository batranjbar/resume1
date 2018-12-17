import React,{Component} from 'react';
import SnowStorm from 'react-snowstorm';
import './Fullpage.css'

class Fullpage extends Component{
   
constructor(){
        super()
 
    this.state = {
        backgroundColor : 'lightgreen'
    }
    this.changebackgroundColor = this.changebackgroundColor.bind(this)
    }
    changebackgroundColor = () =>{
        this.setState({
            backgroundColor : this.state.backgroundColor==='blue' ? 'red' : 'blue'
        })
       
    }

    render(){
        const {children} = this.props;
        return (
         <div className={`fullpage ${this.props.className || ``}`}
          style={{
                backgroundColor: this.state.backgroundColor
            
            }}
                    
             onClick={()=>{
                this.changebackgroundColor()
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
