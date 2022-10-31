import { Box } from '@mui/system'
import React from 'react'
import image from '../../../assets/images/BeFunky-collage.jpg'
function Featured() {
  
  return (
       <Box marginTop="150px">
        <Box  width="98vw"  margin="auto"  >
        <img src={image} alt='' width="100%" height="auto"/>
      </Box>
       </Box>
   )
}

export default Featured
