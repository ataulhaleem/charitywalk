'use client'
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { List, ListItem, ListItemButton } from '@mui/material';
import Overview from '../components/Overview';
import CreateTicket from '../components/CreateTicket';
import FlyerForm from '../components/FlyerForm';
import Status from '../components/Status';
import Admin from '../components/Admin';

export default function Dashboard() {
  const [content, setContent] = useState(null);

  const handleClick = (e, page)  => {
    console.log(page)
    switch (page){
      case 'overview':
        setContent(<Overview />)
        break
      case 'creatTicket':
        setContent(<CreateTicket />)
        break
      case 'designFlyer':
        setContent(<FlyerForm />)
        break
      case 'status':
        setContent(<Status />)
        break
      case 'admin':
        setContent(<Admin />)
        break  
    }
  }

  useEffect(()=>{
    console.log('rerendring')
  },[content])
  
  return (
    <Container xs={8} maxWidth="ld" sx={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
      <Grid container columnSpacing={1}>
        <Grid item xs={2} >
        <List>

            <ListItemButton sx={{border:1, borderBottom:0, borderColor:'green'}} onClick={(e) => {handleClick(e,'overview')}}>
              Over view
            </ListItemButton>

            <ListItemButton sx={{border:1, borderBottom:0,  borderColor:'green'}} onClick={(e) => {handleClick(e,'creatTicket')}}>
              Create a reguest
            </ListItemButton>

            <ListItemButton sx={{border:1, borderBottom:0,  borderColor:'green'}} onClick={(e) => {handleClick(e,'designFlyer')}}>
              Desing Flyer
            </ListItemButton>

            <ListItemButton sx={{border:1, borderBottom:0,  borderColor:'green'}} onClick={(e) => {handleClick(e,'status')}}>
              Status
            </ListItemButton>

            <ListItemButton sx={{border:1}} onClick={(e) => {handleClick(e,'admin')}}>
              Admin
            </ListItemButton>

        </List>
        </Grid>
        <Grid sx={{mt:1}} item xs={8}>
          {content ? <div>{content}</div> : <Overview/>}
        </Grid>
      </Grid>
    </Container>
  );
}
