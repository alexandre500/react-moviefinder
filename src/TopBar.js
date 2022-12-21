import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import './TopBar.css';

export default function Topbar() {
  return (
    <div className='containerTopBar'>
        <AppBar style={{ background: 'rgb(50 50 50)' }}>
            <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Techunting</Typography>
            </Toolbar>
        </AppBar> 
    </div>
  );
}