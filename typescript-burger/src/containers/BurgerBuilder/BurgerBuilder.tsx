import React, { Component } from "react";
import Aux from '../../components/Hoc/Auxx';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build Controlls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;