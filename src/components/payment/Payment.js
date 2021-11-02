import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AllPay from '../../images/allPay.png';
import HELP from '../utilities/help';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Payment(props){
  const {width} =HELP();
  const WIDTH=props.matches ? (500/parseFloat(1366))*width : '350px';
  const HEIGHT=props.matches ? WIDTH/5 : '100px';

  return (
    <div>
      <h2 style={{color : '#FF43A1',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}>
      <img src={AllPay} style={{width : WIDTH,height : HEIGHT}}/>
      </div>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}> 
      <h2 style={{color : '#00CCFF',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <TextField id="standard-basic" label="Total Amount" variant="standard" style ={{width: WIDTH}} />
      <br/>
      <TextField id="standard-basic" label="Student Name" variant="standard" style ={{width: WIDTH}} />
      <br/>
      <TextField id="standard-basic" label="Email" variant="standard" style ={{width: WIDTH}} />
      <br/>
      <br/>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}>
      <Button variant="contained"  style={{color : 'black',backgroundColor : 'white',marginRight : props.matches ? '100px' : '50px'}}>Back</Button>
      <Button variant="contained"  style={{color : 'white',backgroundColor : '#FFC301'}}>Confirm Payment Rs 6500</Button>
      </div>
      <div style={{width : '100%',height : '100px'}}>

      </div>
      </div>
    </div>
  );
};
