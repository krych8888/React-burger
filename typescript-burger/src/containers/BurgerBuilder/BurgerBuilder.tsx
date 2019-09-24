import React, { Component } from "react";
import Aux from '../../components/Hoc/Auxx';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            BreadBottomSeeds : 1, 
            BreadTopSeeds : 1,
            BreadBottom : 2,
            BreadTop : 3,
            Meat : 1,
            Cheese : 1,
            Salad : 0,
            Bacon : 1,
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