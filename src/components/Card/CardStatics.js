import React from 'react';
//import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

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
      <Card
         style={{
            boxShadow: 'none',
            borderRadius: '0.3rem',
         }}
      >
         <Grid style={{ display: 'flex', alignItems: 'center' }}>
            <Card
               style={{
                  borderRadius: '50%',
                  backgroundColor: `${data.bgColor}`,
                  boxShadow: 'none',
                  width: '6.5rem',
                  height: '6.5rem',
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <div>{data.icon}</div>
            </Card>
            <CardContent
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
               }}
            >
               <Typography
                  style={{
                     opacity: '50%',
                     fontSize: '0.75rem',
                  }}
               >
                  {data.title}
               </Typography>
               <Typography
                  style={{
                     fontSize: '1.5rem',
                     fontWeight: 700,
                  }}
               >
                  {data.value}
               </Typography>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     fontSize: '0.75rem',
                  }}
               >
                  {data.status === 'increase' ? (
                     <div
                        style={{
                           color: '#1ba142',
                           fontWeight: 800,
                        }}
                     >
                        <BiUpArrowAlt />

                        {data.differnece}
                     </div>
                  ) : (
                     <div
                        style={{
                           color: '#c61441',
                           fontWeight: 800,
                        }}
                     >
                        <BiDownArrowAlt /> {data.differnece}
                     </div>
                  )}
                  <div style={{ paddingLeft: '0.2rem' }}> this {data.time}</div>
               </div>
            </CardContent>
         </Grid>
      </Card>
   );
}
