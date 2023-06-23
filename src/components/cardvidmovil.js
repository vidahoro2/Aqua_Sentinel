import React from 'react';
import Slider from 'react-slick';
import RecipeReviewCard from './card';
import { data_vids } from './cards_videos'; 
import './cards_container.css'

export default function SliderComponentmovil() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    buttons: false,
  };

  return (
    <Slider {...settings}>
      {data_vids.map((card) => (
        <div key={card.id}>
          <RecipeReviewCard
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