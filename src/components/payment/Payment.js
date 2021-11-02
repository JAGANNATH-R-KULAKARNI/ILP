import * as React from 'react';
import TextField from '@mui/material/TextField';
import AllPay from '../../images/allPay.png';
import HELP from '../utilities/help';
import Button from '@mui/material/Button';

export default function Payment(props){
  const {width} =HELP();
  const WIDTH=props.matches ? (500/parseFloat(1366))*width : '350px';
  const HEIGHT=props.matches ? WIDTH/5 : '100px';

  return (
    <div>
      <h2 style={{color : '#FF43A1',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}>
      <img src={AllPay} style={{width : WIDTH,height : HEIGHT}} alt="all Pays available"/>
      </div>
      <div style={{textAlign : props.matches ? 'left' : 'center',paddingBottom : '100px'}}> 
      <h2 style={{color : '#00CCFF',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <TextField autoFocus={true} id="standard-basic" label="Total Amount" variant="standard" style ={{width: WIDTH}} value="₹ 6500"/>
      <br/>
      <TextField id="standard-basic" label="Student Name" variant="standard" style ={{width: WIDTH}} />
      <br/>
      <TextField id="standard-basic" label="Email" variant="standard" style ={{width: WIDTH}} />
      <br/>
      <br/>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}>
      <Button variant="contained"  style={{color : 'black',backgroundColor : 'white',marginRight : props.matches ? '100px' : '50px'}}>Back</Button>
      <Button variant="contained"  style={{color : 'white',backgroundColor : '#FFC301'}}>Confirm Payment ₹ 6500</Button>
      </div>
      </div>
    </div>
  );
};
