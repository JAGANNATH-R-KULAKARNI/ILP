import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AllPay from '../../images/allPay.png';

export default function Payment(props){
  return (
    <div>
      <h2 style={{color : '#FF43A1',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}>
      <img src={AllPay} style={{width : '500px',height : '100px'}}/>
      </div>
      <div style={{backgroundColor : 'black',width : '500px',height : '70px',}}>

      </div>
      <div style={{textAlign : props.matches ? 'left' : 'center'}}> 
      <h2 style={{color : '#00CCFF',textAlign : props.matches ? 'left' : 'center',left : 0,paddingTop : props.matches ? '20px' : '0px'}}> Payment Method</h2>
      <TextField id="standard-basic" label="Total Amount" variant="standard" style ={{width: '500px'}} />
      <TextField id="standard-basic" label="Student Name" variant="standard" style ={{width: '500px'}} />
      <TextField id="standard-basic" label="Email" variant="standard" style ={{width: '500px'}} />
      </div>
    </div>
  );
};
