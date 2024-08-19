import { Component } from "react";
import Image from "./Image";
import CountButtonComponent from "./CountButtonComponent";


class Header extends Component {

    render(){
        return (
            <header>
                <Image source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt" alternative = "gatto" width = "100px" height = "100px"></Image>
                <CountButtonComponent nameButton = "Clicca e diminuisci" operator = {- 1} />
            </header>
        )
    }
}

export default Header