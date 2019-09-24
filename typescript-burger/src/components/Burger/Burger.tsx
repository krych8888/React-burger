import React, {Component} from 'react';
import styled from 'styled-components';
import Ingredient from './Ingredient/Ingredient';

const BurgerDiv = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    @media (min-width: 1000px) and (min-height: 700px){
        width: 700px;
        height: 600px;
    }
    @media (min-width: 500px) and (min-height: 401px){
        width: 450px;
        height: 400px;
    }
    @media (min-width: 500px) and (min-height: 400px){
        width: 350px;
        height: 300px;
    }
`;

interface IBurgerProps {
    ingredients : {
        BreadBottomSeeds : number; 
        BreadTopSeeds : number;
        BreadBottom : number;
        BreadTop : number;
        Meat : number;
        Cheese : number;
        Salad : number;
        Bacon : number;
    }
    [key: IBurgerProps]: number;
}

class Burger extends Component<IBurgerProps>{

    readonly ingredients = Object.keys(this.props.ingredients)
    .map(ingName => {
        return [...Array(this.props.ingredients[ingName]].map((_, i) => {
            Ingredient(ingName);
        });
    });
 
    render(){
        return <BurgerDiv>
            {Ingredient("BreadTop")}
            {Ingredient("Cheese")}
            {Ingredient("Meat")}
            {Ingredient("BreadBottom")}
        </BurgerDiv>
    }
}
export default Burger;