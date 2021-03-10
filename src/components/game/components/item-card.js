import React from 'react';
import {connect} from "react-redux";
import {TOPIC, maxCountCards, widthForMaxCountCards, widthForCards} from "../../../utils/CONSTANT";
import '../game.css';

const ItemCard = ({el, isClosed, isGuessed, checkCard, countCards, topic}) => {
  const startPath = `/image/theme/${TOPIC[topic]}/`;

  const pathImg = (!isGuessed && isClosed) ? 'background.jpg' : `${el}.jpg`;
  const width = {
    width: (countCards === maxCountCards) ? widthForMaxCountCards : widthForCards,
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