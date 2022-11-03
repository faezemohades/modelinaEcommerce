import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputBase,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
 const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "80px",
    padding: "50px",
    display: "flex",
  },

  table: {
     marginBottom: "20px",
    margin: "auto",
   },
  trTitle: {
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "2px solid #E2E2E2",
    margin: "5px",
    paddingBottom: "20px",
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
}));
function FinalCart() {
  window.scrollTo(0, 0);

  const classes = useStyles();
  const [enterName, setEnterName] = useState("");
  const [enterFamily, setEnterFamily] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterDeliveryDate, setEnterDeliveryDate] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const userInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const [dis, setDis] = useState("");
  const [discount, setDiscount] = useState("%");
  const [totalSum, setTotalSum] = useState(cartTotalAmount);

  const submitHandler = (e) => {
    e.preventDefault();
    const userAddress = {
      name: enterName,
      family: enterFamily,
      number: enterNumber,
      delivery: enterDeliveryDate,
      address: enterAddress,
    };
    userInfo.push(userAddress);
    console.log(userInfo);
   };

  const copounHandler = (event) => {
    event.preventDefault();

    if (dis === "") {
      return;
    } else if (dis === "gold") {
      setTotalSum(cartTotalAmount - (20 * cartTotalAmount) / 100);
      setDiscount("20%");
    } else if (dis === "silver") {
      setTotalSum(cartTotalAmount - (10 * cartTotalAmount) / 100);
      setDiscount("10%");
    }
  };
  return (
    <Box marginTop="150px" width="90vw" paddingRight="30px">
      <Box marginRight="20px">
        <Typography variant="h5"> نهایی کردن خرید </Typography>
      </Box>
      <Box marginBottom="40px"  
       display="flex"  sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}>
        {/* form */}

        <Box component="form" flex={2} onSubmit={submitHandler}> 
          <Stack>
            <Box margin="10px">
              <TextField
                id="standard-basic"
                placeholder="نام "
                fullWidth
                variant="standard"
                onChange={(e) => setEnterName(e.target.value)}
              />
            </Box>
            <Box margin="10px">
              <TextField
                id="standard-basic"
                placeholder="نام خانوادگی"
                fullWidth
                variant="standard"
                onChange={(e) => setEnterFamily(e.target.value)}
              />
            </Box>
          </Stack>
          <Stack>
            <Box margin="10px">
              <TextField
                id="standard-basic"
                placeholder="تلفن همراه "
                fullWidth
                variant="standard"
                onChange={(e) => setEnterNumber(e.target.value)}
              />
            </Box>
            <Box margin="10px">
              <TextField
                id="standard-basic"
                placeholder="تاریخ تحویل"
                fullWidth
                variant="standard"
                onChange={(e) => setEnterDeliveryDate(e.target.value)}
              />
            </Box>
          </Stack>

          <Box margin="10px">
            <TextField
              id="standard-basic"
              placeholder="آدرس"
              fullWidth
              multiline
              rows={2}
              variant="standard"
              onChange={(e) => setEnterAddress(e.target.value)}
            />
          </Box>
         
        </Box>
        <Box flex={2}>
          {/* total box */}
          <Box marginY="40px">
            <Box
              className={classes.wrapper}
              sx={{ flex: { xs: "2", md: "4" } }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                مجموع کل سبد خرید
              </Typography>
              <Box className={classes.totalText}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  قیمت کل
                </Typography>
                <Typography variant="subtitle2">
                  {`${cartTotalAmount} تومان`}
                </Typography>
              </Box>
              <Box className={classes.totalText}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  تخفیف
                </Typography>
                <Typography variant="subtitle2">{discount}</Typography>{" "}
              </Box>
              <Box className={classes.totalText}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  مجموع
                </Typography>
                <Typography variant="subtitle2">{`${totalSum} تومان`}</Typography>
              </Box>
            </Box>
          </Box>

          {/* discount section */}
          <Box
          sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
         
            component="form"
            onSubmit={copounHandler}
            className={classes.discount}
          >
            <Box
              sx={{
                border: "0.5px solid #CCCCCC",
                padding: "5px",
                borderRadius: "3px",
                width: "80%",
                margin:"20px"
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
                  width: "120px",
                  padding: "10px",
                  height: "auto",
                  marginRight: "15px",
                  fontSize: "16px",
                }}
              >
                اعمال تخفیف
              </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: "18px",
                padding: "10px",
                color: "white",
                height: "auto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              اقدام به پرداخت
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FinalCart;
