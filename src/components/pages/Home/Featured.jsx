import { Box } from '@mui/system'
import React from 'react'
import image from '../../../assets/BeFunky-collage.jpg'
function Featured() {
  
  return (
    <div>
      <Box  width="98vw"  margin="auto" >
        <img src={image} alt='' width="100%" height="auto"/>
      </Box>
    </div>
  )
}

export default Featured
