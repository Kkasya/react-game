import React, {useState, useContext} from 'react';
import ItemCard from "./components/item-card";
import {Context, Context2} from "../context";
import {connect} from "react-redux";
import getCards from "../../utils/getCards";

const SIZE = {
  '2*4': 8,
  '3*4': 12,
  '3*6': 18,
};

const audio = new Audio('/sounds/card.mp3');

const Autoplay = ({isPlay, onChangeWin, sound, size}) => {
  const [, setContextMove] = useContext(Context);
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

  const countCards = SIZE[size];

  const dataCards = getCards(countCards).map((i) => ({...i}));
  const [cards, changeCard] = useState(dataCards);

  // const play = (src) => {
  //   audio.pause();
  //   audio.src = src;
  //   audio.volume = sound;
  //   audio.play();
  // };

   function check(card) {
    // if (!card.isClosed) return;
     setContextMove((contextMove) => contextMove + 1);

     changeCard((cards) => {
      const arr = cards;
      const elem = arr.find((item) => item.id === card.id);
      console.log(elem)
      elem.isClosed = false;
      elem.isGuessed = true;

      return arr;
    })
     return new Promise(res => setTimeout(res, 1000));
  }

  function check2(elem) {
    //if (!elem.isClosed) return;

    changeCard((cards) => {
      const arr = cards;
      const next = arr.find((item) => (item.el === elem.el) && (item.isClosed));
      // play('/sounds/right.mp3');
      if (next) {
        next.isClosed = false;
        next.isGuessed = true;
      }
      console.log('--' + elem.el);
      console.log(arr)

      return arr;
    })
  }
   async function playCards() {
     for (let i = 0; i < countCards; i += 1){
       const card = cards[i];
       console.log(card);
       if (!card.isClosed) return;
       //   play('/sounds/card.mp3');
       await check(card);
       await check2(card);

     }

     onChangeWin(false);


    // setStart({
    //   contextStart: contextStart,
    //   contextExit: contextExit,
    //   contextWin: true
    // });
  }

    playCards();

  return (
    <div className="d-flex cards">
      {cards.map(({id, el, isClosed, isGuessed}) => {
        return (<ItemCard
          key={id}
          el={el}
          isClosed={isClosed}
          isGuessed={isGuessed}
          checkCard={() => {}}
          countCards={countCards}
        />)
      })}
    </div>
  )
}
const mapStateToProps = (state) => ({
  sound: state.sound,
  size: state.size,
});

export default connect(mapStateToProps)(Autoplay);