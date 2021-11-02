import React from 'react';
import classes from './Layout.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuUI from '../menu/Menu';

class Layout extends React.Component
{
  render()
  {
    return (
      <div>
        <MenuUI/>
      </div>
    );
  }
};

export default Layout;