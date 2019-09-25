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
        BreadTopSeeds : number;
        BreadBottom : number;
        BreadTop : number;
        Meat : number;
        Cheese : number;
        Salad : number;
        Bacon : number;
        BreadBottomSeeds : number;
        [key: string]: number;
    }
}

class Burger extends Component<IBurgerProps>{
    render(){
        let ingredients : any = Object.keys(this.props.ingredients)
        .map(ingName => {
            return [...Array(this.props.ingredients[ingName])].map((_, i) => {
                return Ingredient(ingName, i);
            });
        });
        
        return <BurgerDiv>
            {ingredients}
        </BurgerDiv>
    }
}
export default Burger;