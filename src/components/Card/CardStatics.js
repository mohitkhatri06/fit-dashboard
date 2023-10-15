import React from 'react';
//import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
//    root: {
//       minWidth: 150,
//    },

//    title: {
//       fontSize: 14,
//    },
//    pos: {
//       marginBottom: 12,
//    },
// });

export default function CardStatics({ data }) {
   // const classes = useStyles();

   return (
      <Card variant='outlined'>
         <CardContent>
            <Typography color='textSecondary' gutterBottom>
               {data.title}
            </Typography>
            <Typography variant='h5' component='h2'>
               {data.value}
            </Typography>
            <Typography color='textSecondary'>
               {data.status}
               {data.differnece}
            </Typography>
            <Typography variant='body2' component='p'>
               this {data.time}
               <br />
            </Typography>
         </CardContent>
      </Card>
   );
}
