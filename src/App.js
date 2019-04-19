import React, { Component } from 'react';
import TitlesSection from './sections/TitlesSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import MenuBarSection from './sections/MenuBarSection';
import ScrollToTop from './sections/Index';


import './App.css';


class App extends Component {

    constructor() {
        super()

        this.state = {
            backgroundColor: 'lightgreen'
        }
        this.changebackgroundColor = this.changebackgroundColor.bind(this)
    }
    changebackgroundColor = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor === 'blue' ? 'red' : 'blue'
        })
    }

    render() {
        return (
            <div className="App">
                < ScrollToTop />
                <MenuBarSection
                    changebackgroundColor={this.changebackgroundColor}
                ></MenuBarSection>
                <TitlesSection 
                    backgroundColor={this.state.backgroundColor} 
                ></TitlesSection>
                <AboutSection 
                    backgroundColor={this.state.backgroundColor} 
                ></AboutSection>
                <SkillSection 
                    backgroundColor={this.state.backgroundColor} 
                ></SkillSection>

            </div>

        );
    }
}


export default App;
