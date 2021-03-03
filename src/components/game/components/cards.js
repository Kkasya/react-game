import React, {useState, useContext, useEffect} from 'react';
import ItemCard from "./item-card";
import {Context, Context2} from "../../context";

const generateCards = (len) => {
  const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
};


const items = generateCards(12).map((el, id) => {
  return {id: id, el: el, isClosed: true, isGuessed: false, isBlocked: false};
});


const Cards = () => {
  const [contextMove, setContext] = useContext(Context);
  const [{contextStart, contextExit, contextWin}, setStart] = useContext(Context2);

  const [{cards, openedCard, countOpen, countGuessed}, changeCard] = useState(
    {cards: items.map((i) => ({...i})), openedCard: null, countOpen: 0, countGuessed: 0});

  useEffect(() => {
    if (!contextStart) {
      changeCard({cards: items.map((i) => ({...i})), openedCard: null, countOpen: 0, countGuessed: 0});
      setContext(0);
    }
  }, [contextStart]);

  const openCard = (id) => {

    if (!contextStart || countOpen > 1) return;

    const newCountOpen = countOpen + 1;

    changeCard(({cards, openedCard, countOpen, countGuessed}) => {
      const arr = cards.map((i) => ({...i}));
      console.log(arr);
      const elem = arr.find((item) => item.id === id);

      if (elem.isBlocked) return {cards, openedCard, countOpen};
      setContext((contextMove) => contextMove + 1);
      elem.isClosed = false;
      elem.isBlocked = true;
      setTimeout(() => checkCards(arr, elem), 300);
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
      elem.isBlocked = false;
      openedCard.isBlocked = false;
      newCountOpen = 0;
      arr.map((elem) => {
        if (!elem.isClosed && !elem.isGuessed) elem.isClosed = true;
      });
    }

    if(newCountGuessed === 12) {
      setStart({
          contextStart: contextStart,
          contextExit: contextExit,
          contextWin: true
        });
    }

     changeCard({
      cards: arr,
      openedCard: newOpenCard,
      isBlocked: false,
      countOpen: newCountOpen,
       countGuessed: newCountGuessed
    });
  };


  return (
    <div className="d-flex cards">
      {cards.map(({id, el, isClosed, isBlocked}) => {
        return (<ItemCard
          key={id}
          el={el}
          isClosed={isClosed}
          isBlocked={isBlocked}
          checkCard={() => openCard(id)}
        />)
      })}
    </div>
  )
}
export default Cards;