import { Box, Button, Grid } from "@mui/material";
import React from "react";
 import data from "../../data/db.json";
import { makeStyles } from "@mui/styles";
 import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    width:"20vw", marginTop:"50px", marginLeft:"50px"
   },
  btn: {
    position: "absolute",
    width: "180px",
    height: "49px",
    background: "#0A0000",
    right: "30%",
    bottom: "40%",
   
  },
}));

function ProductItems() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" marginTop="150px" width="95vw">
      <Box className={classes.box} sx={{ display: { md: 'none',sm: 'none',xs: 'none', lg: 'block' } }}>
        <img
          src="https://modelinaco.com/wp-content/uploads/2022/09/mahsolat-bishtar.jpg"
          alt=""
          width="100%"
        />
       <Link to="/products" style={{ textDecoration: "none",
        color: "grey"}}>
       <Button
          variant="contained"
          className={classes.btn}
          sx={{ color: "#F8F8F8",  fontSize: "18px",
          fontWeight: "bold" }}
        >
            محصولات بیشتر
        </Button>
       </Link>
      </Box>
      <Box width="60%" height="auto">
        {
          <Grid
          item
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {data.products.slice(0,6).map((item, index) => (
              <Grid item xs={2} sm={2} md={4} key={index}>
                   <ProductCard item={item} />
               </Grid>
            ))}
          </Grid>
        }
      </Box>
    </Box>
  );
}

export default ProductItems;
