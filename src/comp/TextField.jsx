import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TextFieldBox({label, save, type}) {
    let [text, setText] = useState('');   

  return (
    <TextField 
        id="outlined-basic" 
        label={label}         
        variant="standard" 
        value={text}
        type={type}
        onChange={(e)=>{
            setText(e.target.value);
            save(label, e.target.value); 
        }}
        fullWidth
        sx={{ "& .MuiInputBase-input": {color: "lightgray"},
          "& .MuiInputLabel-root": {color: "lightgray", fontSize: "14px"},
          "& .MuiInputLabel-root.Mui-focused": {color: "lightgray"},
          "& .MuiInput-underline:before": {borderBottomColor: "white"},
          "& .MuiInput-underline:hover:before": {borderBottomColor: "white !important"},
          "& .MuiInput-underline:after": {borderBottomColor: "white"},
        }}
    />
  )
}

export default TextFieldBox