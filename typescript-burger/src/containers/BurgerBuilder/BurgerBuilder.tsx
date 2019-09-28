import React, { Component } from "react";
import Aux from '../../components/Hoc/Auxx';
import Burger from "../../components/Burger/Burger";
import BurgerControllerPanel from "../../components/BurgerControllerPanel/BurgerControllerPanel";

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            BreadTopSeeds : 0,
            BreadTop : 0,
            Meat : 1,
            Cheese : 1,
            Salad : 1,
            Bacon : 1,
            BreadBottom : 0,
            BreadBottomSeeds : 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerControllerPanel/>
            </Aux>
        );
    }
}

export default BurgerBuilder;