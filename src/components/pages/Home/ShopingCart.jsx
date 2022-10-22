import React from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../feature/cartSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "80px",
    padding: "50px",
    display: "flex",
  },

  imgContainer: {
    width: "100px",
    height: " 100px",
    position: "relative",
  },

  table: {
    width: "80%",
    marginBottom: "20px",
    margin: "auto",
    minWidth: "60%",
  },
  trTitle: {
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "2px solid #E2E2E2",
    margin: "5px",
    paddingBottom: "20px",
  },

  tr: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20px",
    borderBottom: "2px solid #E2E2E2",
    paddingBottom: "20px",
    minWidth: "60%",
  },
  name: {
    fontWeight: "500",
    fontSize: "18px",
  },

  total: {
    fontWeight: "500",
    fontSize: "18px",
  },
  wrapper: {
    margin: "auto",
    width: "70%",
    maxHeight: "300px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "3px solid #E2E2E2",
    borderRadius: "5px",
    minWidth: "50%",
  },

  totalText: {
    display: "flex",
    justifyContent: "space-between",
  },
  discount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    margin: "auto",
  },
  count: {
    border: "1px solid grey",
    width: "20px",
    padding: "2px 5px",
    cursor: "pointer",
  },
}));

function ShopingCart() {
  const classes = useStyles();
  const [dis, setDis] = useState("");
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  

  const incrementItem=()=>{
    dispatch(cartActions.addItem({
     
    }))
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/finalcart";
    navigate(path);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    if (dis === "") return;
    setDis("");
  };


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
          </Box>


          {cartProducts.map((item, index) => (
            <Box className={classes.tr} key={index}>
              <Box>
                <Box className={classes.imgContainer}>
                  <img
                    width="90%"
                    src={item.cover}
                    alt=""
                  />
                </Box>
              </Box>
              <Box>
                <Box component="span" className={classes.name}>
                  {item.price}
                </Box>
              </Box>
              <Box>
                <Box component="span">
                  <Box display="flex" marginLeft="20px" width="30px">
                    <Box className={classes.count}>
                      <AddIcon />
                    </Box>
                    <Box
                      sx={{
                        border: "1px solid grey",
                        width: "20px",
                      }}
                      component="div"
                    >
                      <Typography padding="5px">{item.quantity}</Typography>
                    </Box>
                    <Box className={classes.count}>
                      <RemoveIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box component="span" className={classes.name}>
                 {item.totalPrice}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* discount section */}
        <Box
          component="form"
          onSubmit={submitHandler}
          className={classes.discount}
        >
          <Box
            sx={{
              border: "0.5px solid #CCCCCC",
              padding: "5px",
              borderRadius: "3px",
              width: "80%",
            }}
          >
            <InputBase
              required
              value={dis}
              onChange={(e) => setDis(e.target.value)}
              placeholder="کد تخفیف :"
              sx={{ padding: "5px" }}
            ></InputBase>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                fontWeight: "bold",
                width: "100px",
                padding: "10px",
                height: "auto",
                marginRight: "15px",
              }}
            >
              اعمال تخفیف{" "}
            </Button>
          </Box>
        </Box>
      </Box>

      {/* total box */}
      <Box
        sx={{ flex: { xs: "2", md: "4" }, marginTop: "20px", width: "90vw" }}
      >
        <Box className={classes.wrapper} sx={{ flex: { xs: "2", md: "4" } }}>
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            مجموع کل سبد خرید
          </Typography>
          <Box className={classes.totalText}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              قیمت کل
            </Typography>
            <Typography variant="subtitle2"> $79.60</Typography>
          </Box>
          <Box className={classes.totalText}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              تخفیف
            </Typography>
            <Typography variant="subtitle2"> 0.0</Typography>{" "}
          </Box>
          <Box className={classes.totalText}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              مجموع
            </Typography>
            <Typography variant="subtitle2"> $79.60</Typography>
          </Box>
          <Button
            onClick={routeChange}
            variant="contained"
            sx={{
              padding: "10px 15px",
              color: "white",
              height: " 30px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            اقدام به پرداخت
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopingCart;
