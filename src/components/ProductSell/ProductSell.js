import { LuSearch } from 'react-icons/lu';
import './ProductSell.css';
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material';
export const ProductSell = () => {
   function createData(product, stock, price, total, subtitle) {
      return { product, stock, price, total, subtitle };
   }

   const rows = [
      createData(
         'Abstract 3D',
         '32 in stock',
         45.99,
         20,
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ),
      createData(
         'Abstract 3D',
         '32 in stock',
         45.99,
         37,
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ),
      createData(
         'Eclair',
         '32 in stock',
         45.99,
         24,
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ),
      createData(
         'Cupcake',
         '32 in stock',
         45.99,
         67,
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ),
   ];
   return (
      <>
         <div className='product-head'>
            <h3>Product Sell</h3>
            <div
               style={{
                  background: '#fff',
                  alignItems: 'center',
                  display: 'flex',
                  padding: '0.4rem',
                  marginLeft: 'auto',
               }}
            >
               <LuSearch color='#000' />
               <input
                  placeholder='Search'
                  style={{
                     border: 'none',
                  }}
               />
            </div>
            <FormControl>
               <div style={{ alignContent: 'center', marginTop: '0.5rem' }}>
                  <InputLabel
                     id='simple-select-label'
                     sx={{
                        fontSize: 13,
                     }}
                  >
                     Last 30 days
                  </InputLabel>
                  <Select
                     sx={{
                        width: 150,
                        paddingTop: 0,
                        height: 25,
                     }}
                     value={''}
                  >
                     <MenuItem value={1}>Last 30 days</MenuItem>
                     <MenuItem value={2}>Last 90 days</MenuItem>
                     <MenuItem value={3}>Last 120 days</MenuItem>
                  </Select>
               </div>
            </FormControl>
         </div>
         <div className='table-main'>
            <Table>
               <TableHead
                  style={{
                     opacity: '50%',
                  }}
               >
                  <TableRow>
                     <TableCell
                        style={{
                           fontSize: '0.8rem',
                        }}
                     >
                        Product Name
                     </TableCell>
                     <TableCell
                        style={{
                           fontSize: '0.8rem',
                        }}
                        align='right'
                     >
                        Stock
                     </TableCell>
                     <TableCell
                        style={{
                           fontSize: '0.8rem',
                        }}
                        align='right'
                     >
                        Price
                     </TableCell>
                     <TableCell
                        style={{
                           fontSize: '0.8rem',
                        }}
                        align='right'
                     >
                        Total Sales
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.total}>
                        <TableCell
                           component='th'
                           scope='row'
                           style={{ borderBottom: 'none' }}
                        >
                           <div
                              style={{ display: 'flex', alignItems: 'center' }}
                           >
                              <div
                                 className='product-column'
                                 style={{
                                    borderRadius: '0.4rem',
                                    height: '2.6rem',
                                    overflow: 'hidden',
                                    width: '4rem',
                                 }}
                              >
                                 <img
                                    src='https://allthings.how/content/images/wordpress/2021/10/allthings.how-how-to-enable-small-taskbar-in-windows-11-smalltaskbar10.png'
                                    height='100%'
                                    width='100%'
                                 />
                              </div>
                              <div>
                                 <b>{row.product}</b>
                                 <div
                                    style={{
                                       opacity: '50%',
                                       fontSize: '0.7rem',
                                    }}
                                 >
                                    {row.subtitle}
                                 </div>
                              </div>
                           </div>
                        </TableCell>
                        <TableCell
                           align='right'
                           style={{ borderBottom: 'none' }}
                        >
                           {row.stock}
                        </TableCell>
                        <TableCell
                           align='right'
                           style={{ borderBottom: 'none' }}
                        >
                           <h4>$ {row.price}</h4>
                        </TableCell>
                        <TableCell
                           align='right'
                           style={{ borderBottom: 'none' }}
                        >
                           {row.total}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
};
