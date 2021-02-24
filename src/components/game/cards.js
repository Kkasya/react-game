import React, {useState} from 'react';
import ItemCard from "./item-card";


const generateCards = (len) => {
  const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
};


const items = generateCards(12).map((el, id) => {
  return {id: id, el: el, isClosed: true, isGuessed: false};
});


const Cards = () => {
  const [{cards, openedCard, isBlocked}, changeCard] = useState({cards: items, openedCard: null, isBlocked: false});

  const openCard = (id) => {
    if (isBlocked) return;
    changeCard(({cards, openedCard, isBlocked}) => {
      const arr = [...cards];

      const elem = arr.find((item) => item.id === id);
      elem.isClosed = false;
      setTimeout(() => checkCards(arr, elem), 500);
      return {cards: arr, openedCard: openedCard, isBlocked: true};
    });
  }

  const checkCards = (arr, elem) => {
    let newOpenCard = null;
    if (openedCard === null) {
      newOpenCard = elem;
    } else if (openedCard.el === elem.el) {
      elem.isGuessed = true;
      openedCard.isGuessed = true;
    } else {
      arr.map((elem) => {
        if (!elem.isClosed && !elem.isGuessed) elem.isClosed = true;
      });
    }
    changeCard({
      cards: arr,
      openedCard: newOpenCard,
      isBlocked: false
    });
  };


  return (
    <div className="d-flex cards">
      {cards.map(({id, el, isClosed,isBlocked}) => {
        return (<ItemCard
          id={id}
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