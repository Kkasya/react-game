import React from 'react';
import {connect} from "react-redux";

import '../game.css';

const TOPIC = {
  'Children`s': 1,
  'Game of Thrones': 2,
  'Figures': 3,
  'Детская': 1,
  'Игры престолов': 2,
  'Фигуры': 3,
};

const ItemCard = ({el, isClosed, isGuessed, checkCard, countCards, topic}) => {
  const startPath = `/image/theme/${TOPIC[topic]}/`;

  const pathImg = (!isGuessed && isClosed) ? 'background.jpg' : `${el}.jpg`;
  const width = {
    width: (countCards === 18) ? '15.4%' : '20%',
  };
  return (
    <div className="card card-body" style={width} onClick={checkCard}>
      <img id={el} src={startPath + pathImg} alt="card"/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  topic: state.topic,
});

export default connect(mapStateToProps)(ItemCard);