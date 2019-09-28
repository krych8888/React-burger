import React from 'react';
import ControlerInput from '../BurgerControllerPanel/ControllerInput/ControllerInput';
import styled from 'styled-components';

const BurgerControllerPanel = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

const controlls = [
    { type: "Meat", label: "Meat" },
    { type: "Cheese", label: "Cheese" },
    { type: "Salad", label: "Salad" },
    { type: "Bacon", label: "Bacon" }
]

const burgerController = () => {
    return (<BurgerControllerPanel>
        {controlls.map(control =>
            <ControlerInput key={control.label} label={control.label} type={control.type} />
        )}
    </BurgerControllerPanel>)
}

export default burgerController;