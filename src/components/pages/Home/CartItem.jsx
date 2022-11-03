import React from 'react'
 import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../feature/cartSlice";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyles = makeStyles((theme) => ({
  
    imgContainer: {
      width: "100px",
      height: " 100px",
      position: "relative",
    },
  
    tr: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "20px",

      borderBottom: "2px solid #E2E2E2",
      paddingBottom: "20px",
     },
    name: {
      fontWeight: "500",
      fontSize: "18px",
    },

    count: {
      border: "1px solid grey",
      width: "20px",
      padding: "2px 5px",
      cursor: "pointer",
    },
  }));
  
function CartItem({item}) {

    const{id,cover,price,quantity,totalPrice}=item

    const classes = useStyles();
    const dispatch = useDispatch();

    const incrementItem=()=>{
        dispatch(cartActions.addItem({
          id,
         cover,
         price,
         quantity,
         totalPrice,
        }))
  

      }

      const decrementItem=()=>{
        dispatch(cartActions.removeItem(id))
      

      }

      const deleteItem=()=>{
        dispatch(cartActions.deleteItem(id))
}
  return (
    
        <Box className={classes.tr}   flexDirection={{ xs: "column", md: "row", lg: "row" }} >
          <Box  marginBottom= "30px"
>
            <Box className={classes.imgContainer}>
              <img
                width="90%"
                src={cover}
                alt=""
              />
            </Box>
          </Box>
          <Box marginBottom= "20px">
            <Box component="span" className={classes.name}>
            {`${price} تومان`}
            </Box>
          </Box>
          <Box  marginBottom={{ xs: "20px", md: "20px" }}>
            <Box component="span">
              <Box display="flex" marginLeft="20px" width="30px">
                   <AddIcon onClick={incrementItem}/>
                 <Box
                 
                  component="div"
                  marginBottom= "20px"
                >
                  <Typography padding="5px">{quantity}</Typography>
                </Box>
                   <RemoveIcon onClick={decrementItem}/>
               </Box>
            </Box>
          </Box>
          <Box marginBottom= "20px">
            <Box component="span" className={classes.name}>
             {`${totalPrice} تومان`}
            </Box>
          </Box>
          <Box>
<HighlightOffIcon  onClick={deleteItem}/>
          </Box>
        </Box>
   
  )
}

export default CartItem
