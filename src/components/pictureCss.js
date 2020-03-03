import React from 'react';

import './pictureCss.scss';
import image from '../assets/img/gandhi.png';

const PictureCss = props => {
    return (
        <div className="card">
            <h1 className="card__title">Título</h1>
            <img className="card__image" src={image} alt="Imagem" />
            <button className="card__button">Curtir</button>
            <button className="card__button card__button--secondary">Compartilhar</button>
        </div>
    );
};

export default PictureCss;