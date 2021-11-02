import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BackGroundGB from '../../images/greenBG.png';
import HELP from '../utilities/help';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Kit from '../../images/kitbox.png';
import RatingUI from './rating';
import PaymentUI from '../payment/Payment';

export default function Elevation() {

  const matches = useMediaQuery('(min-width:600px)');
  const matches2=useMediaQuery('(min-width:1029px)');
  const matches3=useMediaQuery('(min-width:970px)')

  const {width} = HELP();
  
  const WIDTH=matches ? (775/parseFloat(1366))*width : 395;
  const HEIGHT=matches ? (2/parseFloat(3))*WIDTH : 263;

  const styles = {
    paperContainer: {
         height : HEIGHT,
         width : WIDTH,
         color: 'white',
         backgroundImage: `url(${BackGroundGB})`,
         backgroundSize: `${WIDTH}px ${HEIGHT}px`,
         backgroundRepeat: 'noRepeat',
    },
  };

  return (
    <Grid container spacing={2}>
        <Grid item xs={matches2 ? 7 : 12}>
        <Paper style={styles.paperContainer} elevation={0}>
           <div style={{width : '100%',height : '23px'}}>
             </div>
             <div style={{width : '100%',height : '100px'}}>
              <h1 style={{color : 'white',paddingLeft :(40/parseFloat(1366))*width }}>Buy Kit</h1>
              <h4 style={{color : 'white',paddingLeft :(40/parseFloat(1366))*width ,fontSize : matches ? '16px' : '12px'}}>
              Imagination will be the only blockers in the sim world. Unlock the <br/>
              creativity. You just need to think how & what to do. Connect with the <br/>
              worlds best Robotics community to solve the real world problems
              <br/>
              <br/>
              <div style={{paddingLeft : '50%'}}>
              <Button variant="contained"  style={{color : 'white',backgroundColor : '#FFC301'}}>
        <a style={{textDecoration : 'none',color : 'white'}} href='https://qtpi.in' target="_blank" rel="noreferrer">Read More</a>
      </Button>
      </div>
              </h4>
              <div style={{
            paddingLeft : (80/parseFloat(1366))*width,paddingBottom : '400px',
            }}>
          <img src={Kit}  alt="kit" style={{height : '100%',width : 'auto',objectFit : 'contain'}}/>
            </div>
             </div>
          </Paper>
        </Grid>
        <Grid item xs={matches2 ? 5 : 12}  style={{paddingTop : matches2 ? '0px' :  matches3 ? '300px' : '400px'}}>
        <PaymentUI matches={matches2} />
        </Grid>
      <div style={{width : '100%',textAlign : 'center',color : 'black',position : 'fixed',bottom : 0}}>
         <a href="https://qtpi.in" style={{textDecorationColor : 'black',color : 'black'}} target="_blank" rel="noreferrer">  Terms & Conditions</a> 
         <br/>
       <RatingUI/>
        </div> 
    </Grid>
  );
}
