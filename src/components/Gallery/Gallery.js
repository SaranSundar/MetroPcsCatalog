import React, {Component} from 'react';
import "./Gallery.css"
import samsung from "./samsung.jpg"
import lg from "./lg.jpg"
import apple from "./apple.jpg"
import motorola from "./motorola.jpg"
import iphoneX from "./iphoneX.jpg"
import zte from "./zte.jpg"

class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <Card image={samsung} brand={"Samsung"} name={"Galaxy S9"} display={"hidden"} discount={"$100 OFF"}/>
                <Card image={lg} brand={"LG"} name={"Stylo 4"} display={"visible"} discount={"$300 OFF"}/>
                <Card image={apple} brand={"Apple"} name={"iPhone 7"} display={"visible"} discount={"$200 OFF"}/>
                <Card image={iphoneX} brand={"Apple"} name={"iPhone X"} display={"visible"} discount={"$100 OFF"}/>
                <Card image={motorola} brand={"Motorola"} name={"Moto e5 Play"} display={"hidden"} discount={"$200 OFF"}/>
                <Card image={zte} brand={"ZTE"} name={"Tempo X"} display={"visible"} discount={"$400 OFF"}/>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="DivArtContainer" style={{visibility: this.props.display}}>
                    <div className="DivArt"/>
                    <div className="DivArtText">{this.props.discount}</div>
                </div>
                <div className="CardBottomHalfContainer">
                    <div className="LTE">4G LTE</div>
                    <StarRating/>
                    <div className="ImageContainer">
                        <img src={this.props.image}/>
                    </div>
                    <div className="BrandName">{this.props.brand}</div>
                    <div className="PhoneName">{this.props.name}</div>
                    <div className="PriceContainer">
                        <PriceBoxesL/>
                        <PriceBoxesM/>
                        <PriceBoxesR/>
                    </div>
                    <div className="InfoContainer">
                        <h1>
                            Limited Time. Extra 20% off!
                        </h1>
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
        <div style={{paddingTop: "5px", fontSize: "20px", paddingBottom: "7px"}}>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>);
};

export default Gallery;