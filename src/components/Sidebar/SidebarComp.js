import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { LuBox } from 'react-icons/lu';
import { BsBox } from 'react-icons/bs';
import { TbDiscount2 } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiWallet3Line, RiQuestionnaireLine } from 'react-icons/ri';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import { Home } from '../Home/Home';
import { Dashboard } from '../Dashboard/Dashborad';
import { Routes, Route, Link } from 'react-router-dom';
import './SidebarComp.css';

const themes = {
   light: {
      sidebar: {
         backgroundColor: '#04043f',
         color: '#607489',
      },
      menu: {
         menuContent: '#fbfcfd',
         icon: '#0098e5',
         hover: {
            backgroundColor: '#c5e4ff',
            color: '#44596e',
         },
         disabled: {
            color: '#9fb6cf',
         },
      },
   },
   dark: {
      sidebar: {
         backgroundColor: '#0b2948',
         color: '#8ba1b7',
      },
      menu: {
         menuContent: '#082440',
         icon: '#59d0ff',
         hover: {
            backgroundColor: '#00458b',
            color: '#b6c8d9',
         },
         disabled: {
            color: '#3e5e7e',
         },
      },
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
               rootStyles={{
                  height: '100vh',
                  color: themes['light'].sidebar.color,
                  backgroundColor: themes['light'].sidebar.backgroundColor,
               }}
            >
               {broken && (
                  <button onClick={() => setToggled(!toggled)}>
                     <ArrowBackSharpIcon />
                  </button>
               )}
               <Menu>
                  <MenuItem className='menu1'>
                     <h3>Dashboard</h3>
                  </MenuItem>
                  <MenuItem
                     component={<Link to='dashboard' className='link' />}
                     icon={<MdOutlineDashboard />}
                     active={window.location.pathname === '/dashboard/'}
                  >
                     Dashboard
                  </MenuItem>
                  <SubMenu label='Product' icon={<LuBox />}>
                     <MenuItem icon={<BsBox />}>Product1</MenuItem>
                     <MenuItem icon={<BsBox />}>Product2</MenuItem>
                  </SubMenu>
                  <SubMenu label='Customers' icon={<CgProfile />}>
                     <MenuItem icon={<CgProfile />}>Present</MenuItem>
                     <MenuItem icon={<RiWallet3Line />}>Past</MenuItem>
                  </SubMenu>
                  <SubMenu label='Income' icon={<RiWallet3Line />}>
                     <MenuItem icon={<LuBox />}>Current Income</MenuItem>
                     <MenuItem icon={<RiWallet3Line />}>
                        Savings Wallet
                     </MenuItem>
                  </SubMenu>

                  <SubMenu label='Promote' icon={<TbDiscount2 />}>
                     <MenuItem icon={<AccountCircleRoundedIcon />}>
                        {' '}
                        Account{' '}
                     </MenuItem>
                     <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                     <MenuItem icon={<NotificationsRoundedIcon />}>
                        Notifications
                     </MenuItem>
                  </SubMenu>
                  <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
               </Menu>
            </Sidebar>
            <div style={{ padding: 0, width: '100%' }}>
               <div>
                  <Box sx={{ flexGrow: 1 }}>
                     <AppBar position='static' style={{ height: '5rem' }}>
                        <Toolbar variant='dense'>
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
                           <Typography
                              variant='h6'
                              color='inherit'
                              component='div'
                           >
                              Photos
                           </Typography>
                        </Toolbar>
                     </AppBar>
                  </Box>
                  <Box sx={{ mt: '1rem', m: '1.5rem' }}>
                     <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='home' element={<Home />} />
                     </Routes>
                  </Box>
               </div>
            </div>
         </div>
      </>
   );
};
