import React, {useState, useContext, useEffect} from 'react';
import ItemCard from "./item-card";
import {Context, Context2, Context4} from "../../context";

const generateCards = (len) => {
  const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
};

const items = () => {
  return generateCards(12).map((el, id) => {
    return {id: id, el: el, isClosed: true, isGuessed: false};
  });
}

const audio = new Audio('/sounds/card.mp3');

const Cards = ({onChangeWin}) => {
  const [contextMove, setContext] = useContext(Context);
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);
  const [contextSave, setSave] = useContext(Context4);

  const dataCards = JSON.parse(localStorage.getItem('game')) || items().map((i) => ({...i}));

  const [{cards, openedCard, countOpen, countGuessed}, changeCard] = useState(
    {cards: dataCards, openedCard: null, countOpen: 0, countGuessed: 0});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('game')) || items().map((i) => ({...i}));
    changeCard({
      cards: data,
      openedCard: openedCard,
      countOpen: countOpen,
      countGuessed: countGuessed
    });
  }, [contextStart]);

  const openCard = (id) => {

    if (!contextStart || contextExit || contextSave || countOpen > 1) return;

    const newCountOpen = countOpen + 1;

    changeCard(({cards, openedCard, countOpen, countGuessed}) => {
      const arr = [...cards];
      const elem = arr.find((item) => item.id === id);

      if (!elem.isClosed) return {cards, openedCard, countOpen, countGuessed};
      audio.pause();
      audio.play();
      setContext((contextMove) => contextMove + 1);
      elem.isClosed = false;
      setTimeout(() => checkCards(arr, elem), 500);
      return {cards: arr, openedCard: openedCard, countOpen: newCountOpen, countGuessed: countGuessed};
    });
  }

  const checkCards = (arr, elem) => {
    let newOpenCard = null;
    let newCountOpen = countOpen;
    let newCountGuessed = countGuessed;
    if (openedCard === null) {
      newOpenCard = elem;
    } else if (openedCard.el === elem.el) {
      elem.isGuessed = true;
      openedCard.isGuessed = true;
      newCountOpen = 0;
      newCountGuessed += 2;
    } else {
      newCountOpen = 0;
      arr.map((elem) => {
        if (!elem.isClosed && !elem.isGuessed) elem.isClosed = true;
      });
    }

    if (newCountGuessed === 12) {
      onChangeWin(true);
      setStart({
        contextStart: contextStart,
        contextExit: contextExit,
        contextWin: true
      });
    }

    changeCard({
      cards: arr,
      openedCard: newOpenCard,
      countOpen: newCountOpen,
      countGuessed: newCountGuessed
    });
  };
  window.addEventListener('unload', () => localStorage.setItem('game', JSON.stringify(cards)));

  return (
    <div className="d-flex cards">
      {cards.map(({id, el, isClosed, isGuessed}) => {
        return (<ItemCard
          key={id}
          el={el}
          isClosed={isClosed}
          isGuessed={isGuessed}
          checkCard={() => openCard(id)}
        />)
      })}
    </div>
  )
}
export default Cards;