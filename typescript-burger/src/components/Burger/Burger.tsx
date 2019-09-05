import React, {Component} from 'react';
import styled from 'styled-components';
import Ingredient from './Ingredient/Ingredient';

const BurgerDiv = styled.div`
    wdith: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-soze: 1.2rem;
    @media (min-width: 1000px) and (min-height: 700px){
        wdith: 700px;
        height: 600px;
    }
    @media (min-width: 500px) and (min-height: 401px){
        wdith: 450px;
        height: 400px;
    }
    @media (min-width: 500px) and (min-height: 400px){
        wdith: 350px;
        height: 300px;
    }
`;

class Burger extends Component{

    render(){
        return <BurgerDiv>
            <Ingredient type = "bread-top"/>
        </BurgerDiv>
    }
}

export default Burger;