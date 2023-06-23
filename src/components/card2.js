import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


export default function RecipeReviewCard2(props) {
  const { title, subheader, image} = props;

  return (
    <Card className="Transparent-card" sx={{ maxWidth: 300 }}>

      
<CardMedia
        component="img"
        height="200"
        image={image}
        alt="docente"
      />
      
      
      <CardContent>

      <CardHeader
        title={title}
        subheader={subheader}
        sx={{ fontFamily: 'Poppins' }}
      />
      </CardContent>
    </Card>
  );
}
