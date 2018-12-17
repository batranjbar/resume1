import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TitlesSection from './sections/TitlesSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import MenuBarSection from './sections/MenuBarSection';
import ScrollToTop  from './sections/Index';


import './App.css';


class App extends Component {

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
   
  render () {
    return (
     

<div className="App" 
        style={{
         backgroundColor: this.state.backgroundColor  
        }}
                    
        onClick={()=>{
           this.changebackgroundColor()
        }} 
>
    < ScrollToTop />   
    <MenuBarSection></MenuBarSection>
    <TitlesSection></TitlesSection>
    <AboutSection></AboutSection>
    <SkillSection></SkillSection>
      
       </div>

    );
  }
}


export default App;
