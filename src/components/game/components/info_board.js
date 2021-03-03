import React, {useContext, useEffect} from 'react';
import {Context, Context2, Context3, Context4} from "../../context";
import {connect} from 'react-redux';
import '../game.css';

const timeEn = 'Time: ';
const timeRu = 'Время: ';
const moveEn = 'moves';
const moveRu = 'ходов';

const InfoBoard = ({timer, isPlay, onChangeTime, lang}) => {
  const [contextMove] = useContext(Context);
  const [{contextStart, contextExit, contextWin}] = useContext(Context2);
  const [{contextSettings, contextScore, contextStatistics}] = useContext(Context3);
  const [contextSave] = useContext(Context4);

  useEffect(() => {
    let counter = 0;
    if (!isPlay && contextStart && !contextWin && !contextExit && !contextSave && !contextStatistics && !contextScore) {
      counter = setTimeout(() => onChangeTime((c) => c + 1), 1000);
    } else counter = timer;

    return () => {
      if (counter) {
        clearTimeout(counter);
      }
    };
  }, [timer, contextExit, contextSave, contextStatistics, contextScore, contextStart, isPlay]);

  useEffect(() => {

  })

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${padTime(min)}:${padTime(sec)}`;
  }

  return (
    <div className="d-flex justify-content-between text-info">
      <div className="d-flex info-item">
        <span>{(lang === 'en') ? timeEn : timeRu}</span>
        <span id='time' className='text-success'>{format(timer)}</span>
      </div>
      <div className="d-flex info-item">
        <span id='moves' className='text-success'>{contextMove}</span>
        <span>{(lang === 'en') ? moveEn : moveRu}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(InfoBoard);