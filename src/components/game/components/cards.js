import React, {useState, useContext} from 'react';
import ItemCard from "./item-card";
import Context from './context'


const generateCards = (len) => {
  const arr = (new Array(len / 2).fill(0)).map((el, id) => el + id);
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
};


const items = generateCards(12).map((el, id) => {
  return {id: id, el: el, isClosed: true, isGuessed: false, isBlocked: false};
});


const Cards = () => {
  const [contextMove, setContext] = useContext(Context);
  const [{cards, openedCard, countOpen}, changeCard] = useState({cards: items, openedCard: null, countOpen: 0});

  const openCard = (id) => {

    if (countOpen > 1) return;

    const newCountOpen = countOpen + 1;

    changeCard(({cards, openedCard, countOpen}) => {
      const arr = [...cards];
      const elem = arr.find((item) => item.id === id);

      if (elem.isBlocked) return {cards, openedCard, countOpen};
      setContext((contextMove) => contextMove + 1);
      elem.isClosed = false;
      elem.isBlocked = true;
      setTimeout(() => checkCards(arr, elem), 300);
      return {cards: arr, openedCard: openedCard, countOpen: newCountOpen};
    });
  }

  const checkCards = (arr, elem) => {

    let newOpenCard = null;
    let newCountOpen = countOpen;
    if (openedCard === null) {
      newOpenCard = elem;
    } else if (openedCard.el === elem.el) {
      elem.isGuessed = true;
      openedCard.isGuessed = true;
      newCountOpen = 0;
    } else {
      elem.isBlocked = false;
      openedCard.isBlocked = false;
      newCountOpen = 0;
      arr.map((elem) => {
        if (!elem.isClosed && !elem.isGuessed) elem.isClosed = true;
      });
    }

     changeCard({
      cards: arr,
      openedCard: newOpenCard,
      isBlocked: false,
      countOpen: newCountOpen
    });
  };


  return (
    <div className="d-flex cards">
      {cards.map(({id, el, isClosed, isBlocked}) => {
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