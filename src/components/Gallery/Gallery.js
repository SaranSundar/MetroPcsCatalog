import React, {Component} from 'react';
import "./Gallery.css"
import samsung from "./samsung.jpg"
import lg from "./lg.jpg"
import apple from "./apple.jpg"

class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <Card image={samsung} brand={"Samsung"} name={"Galaxy S9"}/>
                <Card image={lg}/>
                <Card image={apple}/>
                <Card image={samsung}/>
                <Card image={lg}/>
                <Card image={apple}/>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="DivArtContainer">
                    <div className="DivArt"/>
                    <div className="DivArtText">$300 OFF</div>
                </div>
                <div className="CardBottomHalfContainer">
                    <StarRating/>
                    <div className="ImageContainer">
                        <img src={this.props.image}/>
                    </div>
                    <div className="BrandName">SAMSUNG</div>
                    <div className="PhoneName">Galaxy S9</div>
                    <div className="PriceContainer">
                        <PriceBoxesL/>
                        <PriceBoxesM/>
                        <PriceBoxesR/>
                    </div>
                </div>
            </div>
        );
    }
}

export const PriceBoxesL = (props) => {
    return (
        <div style={{borderRight: "2px solid #d8d8d8", padding: "7px", color: "gray"}}>
            <span style={{fontSize: "15px", verticalAlign: "top"}}>$</span>
            <span style={{fontSize: "35px"}}>85</span>
            <span style={{fontSize: "15px", fontWeight: "bold", verticalAlign: "top"}}>99</span>
        </div>);
};
export const PriceBoxesM = (props) => {
    return (
        <div style={{borderRight: "2px solid #d8d8d8", padding: "7px"}}>
            <span style={{fontSize: "25px", verticalAlign: "top"}}>$</span>
            <span style={{fontSize: "45px"}}>65</span>
            <span style={{fontSize: "25px", fontWeight: "bold", verticalAlign: "top"}}>99</span>
        </div>);
};
export const PriceBoxesR = (props) => {
    return (
        <div style={{padding: "7px", color: "gray"}}>
            <span style={{fontSize: "15px", verticalAlign: "top"}}>$</span>
            <span style={{fontSize: "35px"}}>95</span>
            <span style={{fontSize: "15px", fontWeight: "bold", verticalAlign: "top"}}>99</span>
        </div>);
};

export const StarRating = (props) => {
    return (
        <div style={{paddingTop: "10px", fontSize: "20px", paddingBottom: "7px"}}>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>);
};

export default Gallery;