import { AiOutlineDollar } from 'react-icons/ai';
import { IoReaderOutline } from 'react-icons/io5';

import { BsHandbag } from 'react-icons/bs';

import { BiWalletAlt } from 'react-icons/bi';

export const staticsData = [
   {
      id: 1,
      bgColor: '#e1feef',
      icon: <AiOutlineDollar size={50} color='#099944' />,
      title: 'Earning',
      value: '$198k',
      status: 'increase',
      differnece: '37%',
      time: 'month',
   },
   {
      id: 2,
      bgColor: '#e7dbff',
      icon: <IoReaderOutline size={50} style={{ color: '#a100fe' }} />,
      title: 'Orders',
      value: '$2.4k',
      status: 'decrease',
      differnece: '2%',
      time: 'month',
   },
   {
      id: 3,
      bgColor: '#ccf2ff',
      icon: <BiWalletAlt size={50} style={{ color: '#0c5aba' }} />,
      title: 'Balance',
      value: '$2.4k',
      status: 'decrease',
      differnece: '2%',
      time: 'month',
   },
   {
      id: 4,
      bgColor: '#ffb4db',
      icon: <BsHandbag size={50} style={{ color: '#db071d' }} />,
      title: 'Total Sales',
      value: '$89k',
      status: 'increase',
      differnece: '11%',
      time: 'week',
   },
];
