import React from 'react';
import image from '../assets/img/gandhi.png';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
`;

const CardTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    text-align: center;
    background: #000770;
    color: #ffffff;
    margin: 0 0 2px 0;
    padding: 20px;
`;

const CardImage = styled.img`
    width: 100%;
    display: block;
`;

const CardButton = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    margin-top: 2px;
    background: ${props => props.secondary ? '#999999' : '#000000'};
    color: ${props => props.secondary ? '#000000' : '#ffffff'};
`

const PictureSyled = props => {

    return (
        <Card>
            <CardTitle>Título</CardTitle>
            <CardImage src={image} alt="Image" />
            <CardButton>Curtir</CardButton>
            <CardButton secondary>Compartilhar</CardButton>
        </Card>
    );
};

export default PictureSyled;