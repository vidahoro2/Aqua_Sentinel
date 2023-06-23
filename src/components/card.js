import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


export default function RecipeReviewCard(props) {
  const { title, subheader, image, video} = props;

  return (
    <Card className="Transparent-card" sx={{ maxWidth: 250 }}>
          <CardMedia component="video"  height="200" poster={image} src={video}
          onMouseOver={(e) => e.target.controls = true}
          onMouseOut={(e) => e.target.controls = false} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.currentTarget.play();
          }}
        />
      
      
      <CardContent className='card-header'>

      <CardHeader titleTypographyProps={{ variant: 'h5', fontSize: '1rem' }} // Ajusta el tamaño del título del encabezado
        subheaderTypographyProps={{ variant: 'body1' }}
        title={title}
        subheader={subheader}
        sx={{ fontFamily: 'Poppins' }}/>
      </CardContent>
    </Card>
  );
}
