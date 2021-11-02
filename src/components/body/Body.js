import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BackGroundGB from '../../images/greenBG.png';
import HELP from '../utilities/help';


export default function Elevation() {

  const { height, width } = HELP();
  
  const WIDTH=(width*900)/1366;
  const HEIGHT=(2*WIDTH)/3;

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
        <Grid item xs={9}>
        <Paper style={styles.paperContainer} elevation={0}>

          </Paper>
        </Grid>
    </Grid>
  );
}


// {/* <ThemeProvider theme={lightTheme}>
// <Box
//  sx={{
//    p: 2,
//    bgcolor: 'background.default',
//    display: 'grid',
//    gridTemplateColumns: { md: '1fr 1fr' },
//    gap: 2,
//  }}
// >
//  {/* {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
//    <Item key={elevation} elevation={elevation}>
//      {`elevation=${elevation}`}
//    </Item>
//  ))} */}
//   {/* <Item elevation={0}>
//      {`elevation=${0}`}
//    </Item> */}
// </Box>
// </ThemeProvider>   */}