import React, { useState } from "react";
import Card from "./card";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './menu.css';




const Menu = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Card 1",
      content: "This is the content of card 1",
      image: "https://picsum.photos/id/1015/200/300",
    },
    {
      id: 2,
      title: "Card 2",
      content: "This is the content of card 2",
      image: "https://picsum.photos/id/1016/200/300",
    },
    {
      id: 3,
      title: "Card 3",
      content: "This is the content of card 3",
      image: "https://picsum.photos/id/1018/200/300",
    },
    {
      id: 4,
      title: "Card 4",
      content: "This is the content of card 4",
      image: "https://picsum.photos/id/1021/200/300",
    },
    {
      id: 5,
      title: "Card 5",
      content: "This is the content of card 5",
      image: "https://picsum.photos/id/1022/200/300",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const prevCard = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  return (
    <div className="menu">
      <div className="menu-cards">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            active={index === currentIndex}
          />
        ))}
      </div>
      <div className="menu-controls">
        <ArrowBackIosIcon className="menu-control" onClick={prevCard} />
        <ArrowForwardIosIcon className="menu-control" onClick={nextCard} />
      </div>
    </div>
  );
};

export default Menu;