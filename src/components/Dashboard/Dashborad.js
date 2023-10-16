import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardStatics from './../Card/CardStatics';
//import { useTheme } from '@mui/material/styles';
import { staticsData } from '../../Data/data';
import { BarChart } from '../Charts/BarChart';
import Card from '@mui/material/Card';
import { DoughnutChart } from '../Charts/DounutChart';
import { ProductSell } from '../ProductSell/ProductSell';
import './Dashboard.css';

export const Dashboard = () => {
   const Item = styled(Paper)(() => ({
      textAlign: 'center',
      color: 'black',
      boxShadow: 'none',
      borderRadius: '1rem',
      padding: '0.5rem',
   }));

   const themes = {
      card: {
         backgroundColor: '#04043f',
         color: '#607489',
      },
   };

   return (
      <div className='dashboard-main'>
         <Grid container spacing={4}>
            {staticsData.map((item) => (
               <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                  <Item elevation={0}>
                     <CardStatics data={item} />
                  </Item>
               </Grid>
            ))}
         </Grid>

         <Grid container spacing={4}>
            <Grid item xs={12} sm={8} md={8}>
               <Item
                  elevation={0}
                  style={{
                     marginTop: '2rem',
                     borderRadius: '1rem',
                  }}
               >
                  <Card
                     style={{
                        boxShadow: 'none',
                        borderRadius: '1rem',
                     }}
                  >
                     <BarChart />
                  </Card>
               </Item>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
               <Item
                  elevation={0}
                  style={{
                     marginTop: '2rem',
                  }}
               >
                  <Card
                     style={{
                        border: 'none',
                        boxShadow: 'none',
                     }}
                  >
                     <DoughnutChart />
                  </Card>
               </Item>
            </Grid>
         </Grid>

         <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
               <Item
                  elevation={0}
                  style={{
                     marginTop: '2rem',
                     borderRadius: '1rem',
                  }}
               >
                  <Card
                     style={{
                        boxShadow: 'none',
                        borderRadius: '1rem',
                     }}
                  >
                     <ProductSell />
                  </Card>
               </Item>
            </Grid>
         </Grid>
      </div>
   );
};
