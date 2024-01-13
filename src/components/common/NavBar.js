import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1,textAlign:'center' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GET THE WEATHER PRONOSTIC WITH YOUR ADDRESS
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default NavBar;