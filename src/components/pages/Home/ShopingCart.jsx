import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "80px",
    padding: "50px",
    display: "flex",
    minWidth: "600px",
  },

  table: {
    width: "80%",
    marginBottom: "20px",
    margin: "auto",
    minWidth: "600px",
  },
  trTitle: {
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "2px solid #E2E2E2",
    margin: "5px",
    paddingBottom: "20px",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.common.grey,
  },
}));

function ShopingCart() {
  const classes = useStyles();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <Box
      className={classes.container}
      sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
      flexDirection={{ xs: "column", md: "column", lg: "row" }}
      alignItems={{ xs: "center", md: "center", lg: "self-start" }}
    >
      {/* table product */}
      <Box flex={4} sx={{ width: "100vw" }}>
        <Box className={classes.table}>
          <Box className={classes.trTitle}>
            <Box>
              <Typography variant="h6">محصول</Typography>
            </Box>
            <Box>
              <Typography variant="h6">قیمت</Typography>
            </Box>
            <Box>
              <Typography variant="h6">تعداد</Typography>
            </Box>
            <Box>
              <Typography variant="h6">قیمت کل</Typography>
            </Box>
            <Box>
              <Typography variant="h6">    </Typography>
            </Box>
          </Box>

          {cartProducts.length === 0 ? (
            <Typography variant="h6" textAlign="center">
              سبد خرید شما خالیه!
            </Typography>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </Box>

        <Box marginRight="150px" marginTop="80px">
          <Box display="flex" alignItems="center" marginRight="20px">
            <Typography variant="h5">قیمت کل : </Typography>
            <Typography variant="h6">{`  ${totalAmount} تومان `}</Typography>
          </Box>
          <Box display="flex" justifyContent="flex-start" marginTop="20px">
            <Link className={classes.link} to="/products">
              {" "}
              <Button
                variant="contained"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "bold",
                  width: "120px",
                  padding: "5px",
                  height: "auto",
                  marginRight: "15px",
                }}
              >
                ادامه خرید
              </Button>
            </Link>
            <Link className={classes.link} to="/finalcart">
              {" "}
              <Button
                variant="contained"
                sx={{
                  fontSize: "20px",
                  width: "120px",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px",
                  height: "auto",
                  marginRight: "15px",
                }}
              >
                پرداخت
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopingCart;
