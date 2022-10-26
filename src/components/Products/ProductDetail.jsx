import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import data from "../../data/db.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../../feature/cartSlice";
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "10px",
  },
  text: {
    margin: "10px",
    color: theme.palette.common.grey,
  },
  button: {
    padding: "10px",
  },
}));

function ProductDetail() {

  const classes = useStyles();
  const { id } = useParams();
  const products = data.products;
  const product = products.find((item) => item.id === id);
  const { name, price, size, material, cover, category } = product;
  const relatedProduct = products.filter((item) => category === item.category);
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        cover,
        price,
      })
    );
    toast.success("محصول به سبد خرید شما اضافه شد")
  };




  return (
    <Box marginTop="150px">
      <Box
        marginTop="50px"
        marginBottom="100px"
        sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}
      >
        <Box width="45vw">
          <img width="100%" src={cover} alt="" />
        </Box>
        <Box padding="20px" marginTop="50px">
          <Box className={classes.title}>
            <Typography variant="h4">{name}</Typography>
          </Box>
          <Box className={classes.title}>
            <Typography variant="h5">{`${price} تومان`}</Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="h6"> مشخصات کلی محصول</Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              ابعاد :
            </Typography>
            <Typography variant="subtitle1"> {size} </Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              جنس :
            </Typography>
            <Typography variant="subtitle1">{material}</Typography>
          </Box>
          <Box
            className={classes.text}
            display="flex"
            alignItems="center"
          ></Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{ marginTop: "20px", marginX: "20px" }}
          >
         
            <Box>
              <Button
                 sx={{ padding: "10px 15px", color: "white" }}
                variant="contained"
                onClick={addToCart}
              >
                افزودن به سبد خرید
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="150px" margin="auto"
>
     <Box margin="50px 0px" textAlign="center" className={classes.text}>
     <Typography variant="h4"  >محصولات مرتبط</Typography>
     </Box>
       <Box  >
       <Grid
       display="flex" justifyContent="space-evenly"
           item
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 2, md: 12 }}
          flex={4}
        >
          {relatedProduct.slice(1, 6).map((item) => (
            <Grid item xs={2} sm={4} md={2} key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
       </Box>
      </Box>
    </Box>
  );
}

export default ProductDetail;
