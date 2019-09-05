import React, { Component } from "react";
import Aux from '../../components/Hoc/Auxx';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controlls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;