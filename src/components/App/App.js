import React, {Component} from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import Gallery from "../Gallery/Gallery";


class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="App">
                    <Gallery/>
                </div>
            </div>
        );
    }
}

export default App;
