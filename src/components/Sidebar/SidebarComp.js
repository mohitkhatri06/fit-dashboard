import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { LuBox, LuSearch } from 'react-icons/lu';
import { BsBox } from 'react-icons/bs';
import { TbDiscount2, TbHexagonLetterO } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiWallet3Line, RiQuestionnaireLine } from 'react-icons/ri';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import { Dashboard } from '../Dashboard/Dashborad';
import { Routes, Route, Link } from 'react-router-dom';
import './SidebarComp.css';
import { Grid, Select } from '@mui/material';
import { Product } from '../Product/Product';
import { Customers } from '../Customers/Customers';
import { Income } from '../Income/Income';

const themes = {
   sidebar: {
      backgroundColor: '#04043f',
      color: '#7f80a2',
   },
};
export const SidebarComp = () => {
   const [toggled, setToggled] = useState(false);
   const [broken, setBroken] = useState(
      window.matchMedia('(max-width: 800px)').matches
   );

   return (
      <>
         <div style={{ display: 'flex' }}>
            <Sidebar
               className='app'
               toggled={toggled}
               customBreakPoint='800px'
               onBreakPoint={setBroken}
            >
               {broken && (
                  <button onClick={() => setToggled(!toggled)}>
                     <ArrowBackSharpIcon />
                  </button>
               )}
               <Menu
                  rootStyles={{
                     height: '100%',
                     width: '250px',
                     position: 'fixed',
                     color: themes.sidebar.color,
                     backgroundColor: themes.sidebar.backgroundColor,
                  }}
               >
                  <div
                     className='menu1'
                     style={{
                        color: '#fff',
                        marginTop: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '1.5rem',
                     }}
                  >
                     <TbHexagonLetterO size={30} /> <h3>Dashboard</h3>
                  </div>
                  <MenuItem
                     component={<Link to='/' className='link' />}
                     icon={<MdOutlineDashboard />}
                     active={window.location.pathname === '/'}
                  >
                     Dashboard
                  </MenuItem>
                  <SubMenu label='Product' icon={<LuBox />}>
                     <MenuItem
                        icon={<BsBox />}
                        component={<Link to='/product' className='link' />}
                     >
                        Product1
                     </MenuItem>
                     <MenuItem
                        icon={<BsBox />}
                        component={<Link to='/product' className='link' />}
                     >
                        Product2
                     </MenuItem>
                  </SubMenu>
                  <SubMenu label='Customers' icon={<CgProfile />}>
                     <MenuItem
                        icon={<CgProfile />}
                        component={<Link to='/customers' className='link' />}
                     >
                        Present
                     </MenuItem>
                     <MenuItem
                        icon={<RiWallet3Line />}
                        component={<Link to='/customers' className='link' />}
                     >
                        Past
                     </MenuItem>
                  </SubMenu>
                  <SubMenu label='Income' icon={<RiWallet3Line />}>
                     <MenuItem
                        icon={<LuBox />}
                        component={<Link to='/income' className='link' />}
                     >
                        Current Income
                     </MenuItem>
                     <MenuItem
                        icon={<RiWallet3Line />}
                        component={<Link to='/income' className='link' />}
                     >
                        Savings Wallet
                     </MenuItem>
                  </SubMenu>

                  <SubMenu label='Promote' icon={<TbDiscount2 />}>
                     <MenuItem icon={<TbDiscount2 />}> Account </MenuItem>
                     <MenuItem icon={<TbDiscount2 />}> Privacy </MenuItem>
                     <MenuItem icon={<TbDiscount2 />}>Notifications</MenuItem>
                  </SubMenu>
                  <SubMenu label='Help' icon={<RiQuestionnaireLine />}>
                     <MenuItem icon={<RiQuestionnaireLine />}>
                        {' '}
                        Privacy
                     </MenuItem>
                     <MenuItem icon={<RiQuestionnaireLine />}>Terms</MenuItem>
                  </SubMenu>
               </Menu>
            </Sidebar>
            <div style={{ padding: 0, width: '100%' }}>
               <Grid>
                  <Box sx={{ flexGrow: 1 }}>
                     <AppBar
                        elevation={0}
                        position='static'
                        style={{
                           height: '5rem',
                           display: 'flex',
                           background: 'transparent',
                        }}
                     >
                        <Toolbar
                           style={{
                              height: '100%',
                              display: 'flex',
                              flexWrap: 'wrap',
                           }}
                        >
                           <IconButton
                              edge='start'
                              color='inherit'
                              aria-label='menu'
                              sx={{ mr: 2 }}
                           >
                              {broken && (
                                 <button
                                    className='sb-button'
                                    onClick={() => setToggled(!toggled)}
                                 >
                                    <MenuTwoToneIcon />
                                 </button>
                              )}
                           </IconButton>
                           <Grid>
                              <Typography
                                 style={{
                                    fontWeight: 700,
                                    color: '#000',
                                    fontSize: '1.2rem',
                                 }}
                              >
                                 Hello Mohit 👋,
                              </Typography>
                           </Grid>
                           <Grid
                              sm={12}
                              style={{
                                 background: '#fff',
                                 alignItems: 'center',
                                 display: 'flex',
                                 padding: '0.4rem',
                                 marginLeft: 'auto',
                                 marginRight: '2rem',
                              }}
                           >
                              <LuSearch color='#000' />
                              <input
                                 id='outlined-basic'
                                 placeholder='Search'
                                 style={{
                                    border: 'none',
                                    paddingLeft: '0.4rem',
                                    width: 'auto',
                                 }}
                              />
                           </Grid>
                        </Toolbar>
                     </AppBar>
                  </Box>
                  <Box sx={{ mt: '1rem', m: '1.5rem' }}>
                     <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/customers' element={<Customers />} />
                        <Route path='/income' element={<Income />} />
                     </Routes>
                  </Box>
               </Grid>
            </div>
         </div>
      </>
   );
};
