import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const Feild = ({ name, email, remove, ind }) => {
     return (
          <div className="data_val">

               <h4> {name} </h4>
               <h4> {email} </h4>
               <Button variant="contained" startIcon={<DeleteIcon />} color='error' onClick={() => remove(ind)} >
                    Remove
               </Button>
          </div >
     )
}

export default Feild;