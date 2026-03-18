import TextFieldBox from './TextField';
import React, { useState } from 'react'; 
import Button from '@mui/material/Button';

function Sign() {
  let [form,setForm] = useState({})
  function save(name,value){
    setForm({...form, [name]:value})
  }

  console.log(form);
  return (
    <article>
        <div className='title'>SIGN UP</div>
        <div className='join'>
            <h2>Create Account</h2>
            <li><TextFieldBox label="Full Name" type='text' save={save} /></li> 
            <li><TextFieldBox label="Email" type='email' save={save} /></li>
            <li><TextFieldBox label="Password" type='password' save={save} /></li>
            <Button variant="contained" disableElevation> Create Account </Button>
            <p>Already have an account? <a href="#">Log In</a></p>
        </div>
    </article>
  )
}

export default Sign