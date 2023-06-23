import React from 'react';
import Slider from 'react-slick';
import RecipeReviewCard2 from './card2';
import { data }  from './cards_data';
import './cards_container.css'

export default function SliderComponentmv() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {data.map((card) => (
        <div key={card.id}>
          <RecipeReviewCard2
            title={card.title}
            subheader={card.subheader}
            image={card.image}
            video={card.video}
          />
        </div>
      ))}
    </Slider>
  );
}
