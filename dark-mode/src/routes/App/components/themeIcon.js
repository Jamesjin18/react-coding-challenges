
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

export class ThemeIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false
        }
        this.switchMode = this.switchMode.bind(this);
    }

    switchMode() {
        var elem = document.getElementsByTagName("html")[0];
        (elem.classList.contains("dark-mode"))?elem.classList.remove("dark-mode"):elem.classList.add("dark-mode");

        this.setState(prevState => ({
            darkMode: !prevState.darkMode
        }))
    }
    render() {
        const darkIcon = <FontAwesomeIcon icon={faMoon} />
        const sunIcon = <FontAwesomeIcon icon={faSun} color="#FFA500"/>
        
        return <button className="app__dark-mode-btn icon level-right" onClick={this.switchMode}>{this.state.darkMode?sunIcon:darkIcon}</button>;
            
    }
}