import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function CarouselVideo() {
  return (
    <Slider {...settings}>
      <Card sx={{ minWidth: 300 }}>
        <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        </video>
        <CardContent>
          <Typography level="h6" fontWeight="lg" textColor="#fff" mt={{ xs: 12, sm: 18 }}>
            Video 1
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 300 }}>
        <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        </video>
        <CardContent>
          <Typography level="h6" fontWeight="lg" textColor="#fff" mt={{ xs: 12, sm: 18 }}>
            Video 2
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 300 }}>
        <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        </video>
        <CardContent>
          <Typography level="h6" fontWeight="lg" textColor="#fff" mt={{ xs: 12, sm: 18 }}>
            Video 3
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 300 }}>
        <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        </video>
        <CardContent>
          <Typography level="h6" fontWeight="lg" textColor="#fff" mt={{ xs: 12, sm: 18 }}>
            Video 4
          </Typography>
        </CardContent>
      </Card>
    </Slider>
  );
}