import React from 'react';
import styled from 'styled-components';

const Controll = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

const ControllButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

const Button = styled(ControllButton)`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }

    &::hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
`;

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const Less = styled(Button)`
    background-color: #D39952;
    color: white;
    &:hover {
        background-color: #DAA972;
        color: white;
    }
    &:active {
        background-color: #DAA972;
        color: white;
    }
`;

const More = styled(Button)`
    background-color: #8F5E1E;
    color: white;
    &:hover {
        background-color: #99703F;
        color: white;
    }
    &:active {
        background-color: #99703F;
        color: white;
    }
`;


interface IControllerInput {
    label : string;
    type : string;
};

const controllerInput = (props: IControllerInput) => {
    return (
        <Controll>
            <Label>{props.label}</Label>
            <More>More</More>
            <Less>Less</Less>
        </Controll>
    )
}

export default controllerInput;