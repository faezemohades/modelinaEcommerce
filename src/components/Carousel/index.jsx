import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slides from '../../data/slides.json'
function index() {
  return (
    <Carousel sx={{height:"auto" ,marginTop:"80px"}}>
    {
        slides.map( item => <Item key={item.id} item={item} /> )
    }
</Carousel>
  )
}

export default index
