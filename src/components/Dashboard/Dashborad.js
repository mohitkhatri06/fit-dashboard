import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardStatics from './../Card/CardStatics';
//import { useTheme } from '@mui/material/styles';
import { staticsData } from '../../Data/data';
import { BarChart } from '../Charts/BarChart';

export const Dashboard = () => {
   const Item = styled(Paper)(() => ({
      textAlign: 'center',
      color: 'black',
   }));

   return (
      <>
         <Grid container spacing={4}>
            {staticsData.map((item) => (
               <Grid item xs={12} sm={6} md={3}>
                  <Item elevation={0}>
                     <CardStatics data={item} />
                  </Item>
               </Grid>
            ))}
         </Grid>

         <Grid container spacing={4}>
            <Grid item xs={12} sm={7} md={8}>
               <Item elevation={0}>
                  <BarChart />
               </Item>
            </Grid>

            <Grid item xs={12} sm={5} md={4}>
               <Item elevation={0}>Two</Item>
            </Grid>
         </Grid>
      </>
   );
};
