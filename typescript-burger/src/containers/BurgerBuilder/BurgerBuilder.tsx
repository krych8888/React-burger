import React, { Component } from "react";
import Aux from '../../components/Hoc/Auxx';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            BreadTopSeeds : 1,
            BreadTop : 0,
            Meat : 0,
            Cheese : 0,
            Salad : 0,
            Bacon : 0,
            BreadBottom : 0,
            BreadBottomSeeds : 1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <div>Build Controlls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;