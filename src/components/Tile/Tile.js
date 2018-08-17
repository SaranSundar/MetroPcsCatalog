import React, {Component} from "react"
import "./Tile.css"
import imgT from "./samsung.jpg"

class Tile extends Component {
    render() {
        return (
            <div className="TilePage" style={{textAlign: "center"}}>
                <div className="card card-3">
                    <div className="discount-div">
                        <span className="discount-title">$300 OFF</span>
                    </div>
                    <span className="brand-title">SAMSUNG</span>
                    <div className="middle">
                        <div className="phone-container">
                            <img className="phone-image" src={imgT}/>
                        </div>
                    </div>
                    <span className="phone-name">Galaxy S9</span>
                </div>
            </div>
        );
    }
}

export default Tile;