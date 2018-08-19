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
                    <StarRating/>
                </div>
            </div>
        );
    }
}

export const StarRating = (props) => {
    return (
        <div style={{paddingTop: "10px", fontSize: "20px"}}>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>);
};

export default Gallery;