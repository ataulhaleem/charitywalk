import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [selectedPage, setSelectedPage] = React.useState("Home")
  const router = useRouter();

  const handleSelectedPage = (e) => {
    setSelectedPage(e.currentTarget.dataset.value)

  }

  return (
    <Card sx={{ maxWidth: 'ld' }}>
      <CardHeader 
      
        avatar={
            <Avatar component='a' href="https://charitywalk.de/" alt="Charity walk ahmadiyya" src="/Logo-Charity-Walk.jpg" />
        }
        action={
        <Grid container  sx={{padding:2}}>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'Home'} onClick={(e) => {handleSelectedPage(e);router.push('/home')}}>Home</Button>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'About'}  onClick={(e) => {handleSelectedPage(e);router.push('/about')}}>About</Button>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'Events'} onClick={(e) => {handleSelectedPage(e);router.push('/events')}}>Events</Button>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'Images'} onClick={(e) => {handleSelectedPage(e);router.push('/images')}}>Images</Button>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'Contact'} onClick={(e) => {handleSelectedPage(e);router.push('/contact')}}>Contact</Button>
          <Button size='small' variant='TEXT' sx={{fontSize:'18px', color:'green', fontFamily:'Sans-serif'}} data-value={'Login'} onClick={(e) => {handleSelectedPage(e);router.push('/login')}}>Login</Button>

            </Grid>
        }
        title="Charity Walk Ahmadiyya Deutschland"
        // subheader= {`${new Date()}`}
        // subheaderTypographyProps={{ style: { color:'black',fontFamily:'Sans-serif' } }}
        titleTypographyProps={{ variant: 'h6', style: { color:'green',fontSize: '28px', fontFamily:'Sans-serif' } }}
        // subheaderTypographyProps={{ style: { color:'white',fontFamily:'Sans-serif' } }}
        // titleTypographyProps={{ variant: 'h6', style: { color:'white',fontSize: '22px', fontFamily:'Sans-serif' } }}
        // style={{ backgroundColor: '#354093' }}
      />
<Box position="relative">
        <Box
          position="absolute"
          top="30%"
        //   left="50%"
        //   transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex="1"
          width="100%"
        >
<Typography variant='h7' sx={{ fontSize: '50px', fontWeight:'bold', color: 'green', fontFamily: 'Stencil, sans-serif' }}>
      {selectedPage}
    </Typography>
    
            </Box>
        <CardMedia
          component="img"
          height="180"
          image="/ansarullah.jpg"
          alt="insarullah logo"
        />
      </Box>
    </Card>
  );
}