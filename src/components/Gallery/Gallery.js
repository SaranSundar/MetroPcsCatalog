import React, {Component} from 'react';
import "./Gallery.css"
import samsung from "./samsung.jpg"

class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <Card/>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div className="Card" style={{gridColumnStart: "2", gridRowStart: "1"}}>
                <div className="DivArtContainer">
                    <div className="DivArt"/>
                    <div className="DivArtText">$300 OFF</div>
                </div>
                <div className="CardBottomHalfContainer">
                    <div className="BrandName">SAMSUNG</div>
                    <div className="ImageContainer">
                        <img src={samsung}/>
                    </div>
                    <div className="PhoneName">Galaxy S9</div>
                </div>
            </div>
        );
    }
}

export default Gallery;