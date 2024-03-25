import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';


function ResponsiveAppBar() {
  

  return (
    <AppBar position="static" color='info'>
      <Container maxWidth="ld">
        <Toolbar disableGutters>
            <Grid   container
  direction="row"
  justifyContent="space-between"
  alignItems="right"
>

<Grid item>
            <IconButton             href="https://charitywalk.de/"
 sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="cropped-charity_walk_logo2x.png" />
              </IconButton>
          <Typography
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize : 22,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CHARITY WALK DEUTSCHLAND 
          </Typography>
          </Grid>

          <Grid item >   
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Login
          </Typography>     

</Grid>
</Grid>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;