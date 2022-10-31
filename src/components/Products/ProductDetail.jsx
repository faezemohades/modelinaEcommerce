import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import data from "../../data/db.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../../feature/cartSlice";
import { toast } from "react-toastify";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import { useState } from "react";
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
    fontSize: "18px",
    fontWeight: "bold",
  },
  tabs: {
    margin: "10px",
    borderBottom: "1px solid",
    "& h6": {
      cursor: "pointer",
    },
  },
  tabcontent: {
    padding: "30px",
    "& p": {
      color: theme.palette.common.grey,
      lineHeight: "30px",
    },
  },

}));

function ProductDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const products = data.products;
  const product = products.find((item) => item.id === id);
  const { name, price, size, material, cover, category, desc } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  const [tab, setTab] = useState("desc");

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
    toast.success("محصول به سبد خرید شما اضافه شد");
  };
  const [textValue, setTextValue] = useState({ name: "", email: "", decs: "" });
  const handleResetValue = () => {
    setTextValue({ name: "", email: "", decs: "" });
  };
  return (
    <Box marginTop="150px">
      {/* product detail */}
      <Box
        marginTop="50px"
        marginBottom="100px"
        sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}
      >
        <Box width="500px">
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
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              دسته بندی :
            </Typography>
            <Typography variant="subtitle1">{category}</Typography>
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

      {/* decs & review */}

      <Box display="flex" justifyContent="center" marginBottom="10px">
        <Box sx={{ width: "50%" }}>
          <Box component="div" display="flex" justifyContent="center">
            <Box className={classes.tabs}>
              <Typography
                variant="h6"
                 onClick={() => setTab("desc")}
              >
                توضیخات
              </Typography>
            </Box>
            <Box className={classes.tabs}>
              <Typography variant="h6" onClick={() => setTab("rev")}>
                نظرات
              </Typography>
            </Box>
          </Box>

          {tab === "desc" ? (
            <Box component="div" className={classes.tabcontent}>
              <Box component="p">{desc}</Box>
            </Box>
          ) : (
            <Box component="div" marginY="60px">
              <Box
                component="form"
                action="https://formsubmit.co/popon32238@24rumen.com"
                method="POST"
                target="_blank"
              >
                <Box
                  sx={{
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": {
                      m: 1,
                    },
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    placeholder=" نام خانوادگی"
                    type="text"
                    value={textValue.name}
                    onChange={(e) =>
                      setTextValue({
                        ...textValue,
                        name: e.target.value,
                      })
                    }
                    id="filled-basic"
                    variant="filled"
                  />
                  <TextField
                    placeholder="آدرس ایمیل"
                    type="email"
                    value={textValue.email}
                    onChange={(e) =>
                      setTextValue({
                        ...textValue,
                        email: e.target.value,
                      })
                    }
                    id="filled-basic"
                    variant="filled"
                  />
                </Box>
                <Box
                  sx={{
                    width: "90%",
                    maxWidth: "100%",
                    margin: "auto",
                  }}
                >
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder=" توضیحات "
                    type="text"
                    value={textValue.decs}
                    onChange={(e) =>
                      setTextValue({
                        ...textValue,
                        decs: e.target.value,
                      })
                    }
                    id="filled-basic"
                    variant="filled"
                    multiline
                    rows={4}
                  />
                </Box>
                <Box display="flex" justifyContent="center" marginTop="20px">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleResetValue}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      width: "80px",
                      fontSize: "18px",
                    }}
                  >
                    ارسال
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {/* sending detail */}

      <Box display="flex" justifyContent="center" marginY="100px">
        <Box
          sx={{ border: "2px solid #DEDEDE", width: "250px", marginX: "10px" }}
        >
          <Box display="flex" justifyContent="space-around" paddingTop="10px">
            <LocalShippingOutlinedIcon fontSize="large" />
            <Typography variant="h5">ارسال پست</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ padding: "20px" }}>
            ارسال تهران و شهرستان ها تحویل 24 - 48 ساعت کاری در روزهای کاری
          </Typography>
        </Box>
        <Box sx={{ border: "0.8px solid #DEDEDE", width: "250px" }}>
          <Box display="flex" justifyContent="space-around" paddingTop="10px">
            <MopedOutlinedIcon fontSize="large" />
            <Typography variant="h5"> ارسال سریع </Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ padding: "20px" }}>
            ارسال به وسیله پیک فقط در تهران تحویل 2 ساعته در روزهای کاری
          </Typography>
        </Box>
      </Box>

      {/* related product */}
      <Box marginTop="150px" margin="auto">
        <Box margin="50px 0px" textAlign="center" className={classes.text}>
          <Typography variant="h4">محصولات مرتبط</Typography>
        </Box>
        <Box>
          <Grid
            display="flex"
            justifyContent="space-evenly"
            item
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 2, md: 12 }}
            flex={4}
          >
            {relatedProduct.slice(1, 5).map((item) => (
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
