import React, {Component} from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import Tile from "../Tile/Tile";
import {Filter} from "../Filter/filter.component";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Tile/>
            </div>
        );
    }
}

export default App;
