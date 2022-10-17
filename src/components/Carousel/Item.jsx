import React from 'react'
import { Paper  } from '@mui/material'

function Item({item}) {
  return (
    <Paper >
            <img src={item.image} alt={item.title} style={{  width:"100%"}}/>
            <h2>{Item.title}</h2>
 
         
        </Paper>
  )
}

export default Item
