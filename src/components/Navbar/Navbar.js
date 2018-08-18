import React, {Component} from "react"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li>
                        <div style={{width: "150px", height: "50px"}}/>
                    </li>
                    <li><a className="active" href="#home"><span style={{fontSize: "20px"}}>metro</span><span
                        style={{fontWeight: "normal", fontSize: "20px"}}>PCS</span></a></li>
                    <li><a style={{paddingTop: "23px"}} href="#news">Shop</a></li>
                    <li><a style={{paddingTop: "23px"}} href="#contact">Support</a></li>
                    <li><a style={{paddingTop: "23px"}} href="#about">Payment</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;