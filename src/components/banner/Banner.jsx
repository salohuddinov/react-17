import { Button, TextField } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <div className='banner__button'>
      <TextField label="Outlined" variant="outlined" />
      <Button onClick={() => alert("btn click")} variant="contained">Contained</Button>
    </div>
  )
}

export default Banner