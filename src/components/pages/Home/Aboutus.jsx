import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  title: {
    color: "gray",
    backgroundColor: "#FBFBFB",
    paddingTop: "20px",
    textAlign: "center",
    marginTop: "70px",
    width: "100%",
  },
  right: {
     width: "80%",
     margin:" auto",
     padding: "20px",
  },
  head: {
    padding: "10px",
  },
  text: {
    color: "gray",
    overflow: "hidden",
    textOverflow: "ellipsis",
   },
}));

function Aboutus() {
const classes = useStyles();

  return (
    <Box>
       <Box className={classes.title}>
        <Typography variant="h4"> درباره ما</Typography>
       </Box>
       <Box
        sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}
      >
        <Box className={classes.right} flex={4}>
          <Typography className={classes.head} variant="h5">
            با مدلینا آشنا شوید
          </Typography>
          <Typography className={classes.text} variant="h6">
            مجموعه مدلینا فعالیت خود را از سال 1385 با هدف طراحی و تولید شال و
            روسری با مدیریت آقای میثم توکلی آغاز نموده است.
          </Typography>
          <Typography className={classes.text} variant="h6">
            مدلینا با الهام از ترند جهانی و فرهنگ ایرانی، انتخاب دقیق پارچه از
            بازارهای داخلی و خارجی و هنر دست دوزندگان ماهر توانسته است محصولاتی
            ماندگار خلق کند و به مهم‌ترین رسالت خود که همان جلب رضایت کامل
            مشتریان است دست یابد.
          </Typography>
          <Typography className={classes.text} variant="h6">
            اکنون به خود می‌بالیم که محصولات تولیدی ما برگرفته از ویژگی‌های بارز
            هنر ایران‌زمین بوده و مورد توجه بانوان کشور از جمله جامعه هنرمندان و
            بازیگران مطرح کشور قرار گرفته است.
          </Typography>
        </Box>
        <Box sx={{ flex: { xs: "2", md: "4" } }} mt={7}>
          <Box display="flex" justifyContent="center" margin="auto">
            <img
              width="70%"
              src="https://modelinaco.com/wp-content/uploads/details/about-us.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Aboutus
