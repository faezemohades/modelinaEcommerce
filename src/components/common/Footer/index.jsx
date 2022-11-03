import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "auto",
      width: "100%",
      backgroundColor: "#F8F8F8",
      marginTop: "150px",
      
    },
    title: {
      paddingRight: "10px",
    },
    text: {
      color: "gray",
      paddingRight: "5px",
    },
    icons: {
       display: "flex",
      justifyContent: "center",
     },
    icon: {
      display: "flex",
      justifyContent: "center",
       cursor: "pointer",
      margin: "10px",
      padding: "10px",
      border: "1px dashed gray",
      borderRadius: "50%",
      backgroundColor: "white",
     },
    boxes: {
      width: "80%",
      padding: "50px",
      margin: " auto",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.common.grey,
    
  }
  }));
  
function Footer() {
    const classes = useStyles();

  return (
    <Box
    className={classes.container}
    sx={{
      flexWrap: { xs: "wrap", sm: "wrap", md: "wrap", lg: "nowrap" },
      flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
       
    }}
  >
    {/* about  */}
    <Box className={classes.boxes}  >
      <Typography variant="h5" className={classes.title} marginY="10px">
        درباره ما
      </Typography>
      <Typography className={classes.text}>
        مدلینا با الهام از ترند جهانی و فرهنگ ایرانی، انتخاب دقیق پارچه از
        بازارهای داخلی و خارجی و هنر دست دوزندگان ماهر توانسته است با خلق
        محصولات ماندگار به مهم‌ترین رسالت خود که همان جلب رضایت کامل مشتریان
        است دست یابد.     </Typography>
      <Box className={classes.icons}>
        <Box className={classes.icon}>
          <InstagramIcon />
        </Box>
        <Box className={classes.icon}>
          <PinterestIcon />
        </Box>
        <Box className={classes.icon}>
          <YouTubeIcon />
        </Box>
      </Box>
    </Box>

    {/* center */}
    <Box className={classes.boxes}>
         <Typography  variant="h5" className={classes.title} marginY="10px">دسترسی سریع</Typography>
         <Box>
          <Link  className={classes.link} to="/products"><Typography>محصولات</Typography></Link>
          <Link className={classes.link} to="/shop"><Typography>سبد خرید</Typography></Link>
          <Link className={classes.link} to="/about"><Typography>درباره ما</Typography></Link>
          <Link className={classes.link} to="/contact"><Typography>تماس با ما</Typography></Link>
          </Box>
     </Box>

    {/* contact info */}
    <Box className={classes.boxes}>
      <Typography variant="h5" className={classes.title} marginY="10px">
        اطلاعات تماس
      </Typography>
      <Box sx={{ display: "flex", margin: "5px" }}>
        <LocationOnIcon />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" className={classes.title}>
            آدرس دفتر :
          </Typography>
          <Typography className={classes.text}>
             خیابان پامنار-ابتداى کوی حق پرست-نبشبنی هاشمی 
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CallIcon />

          <Typography variant="h6" className={classes.title}>
            شماره تماس :
          </Typography>
        </Box>
        <Typography className={classes.text}>
          33996304 021 - 33996303 021
        </Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default Footer
