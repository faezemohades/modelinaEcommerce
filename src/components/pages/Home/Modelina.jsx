import React from 'react'
import mod from '../../../assets/images/modelina.png'
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
     animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 1,
    transform: "rotate(360deg)",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "rotate(180deg)",
    },
    "100%": {
      opacity: 1,
      transform: "rotate(360deg)",
    },
  },
  container: {
    margin: "auto",
    width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:"150px",
    marginBottom:"40px"
  },
  center: { textAlign: "center" },
  title: {
    textAlign: "center",
    color: "#6E6E6E",
    paddingBottom: "20px",
  },
  top: {
    textAlign: "center",
    paddingBottom: "20px",
    borderBottom: "2px solid",
  },
  text: {
    textAlign: "center",
    color: "#6E6E6E",
    paddingTop: "20px",
  },
}));
function Modelina() {
    const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box display="flex" justifyContent="center"  width="100%"  >
        <Box className={classes.animatedItem}   >
          <img
            src="https://modelinaco.com/wp-content/uploads/2022/09/site1-gerd-.png"
            alt=""
           width="100%"
           />
        </Box>
        <Box  sx={{ display: { xs: 'none', sm: 'none', md: 'none' ,lg: 'flex' ,justifyContent:"center"} }} >
        <Box sx={{ width: "45%" }} className={classes.animatedItemExiting}>
          <Box paddingBottom="20px" display="flex" justifyContent='center'>
            <img src={mod} alt="" />
          </Box>

       
        <Typography variant="h6" className={classes.top}>
            با مدلینا  تیپ شخصی تان را امضا کنید
          </Typography>
          <Typography variant="body1" className={classes.text}>
          مدلینا  بزرگترین ارائه دهنده انواع شال و روسری به صورت تک و عمده به
            سراسر کشور |
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {" "}
            پخش عمده شال و روسری در بازار تهران |
          </Typography>
        </Box>

        </Box>
        <Box className={classes.animatedItem}>
          <img
            src="https://modelinaco.com/wp-content/uploads/2022/09/site2-gerd-.png"
            alt=""
            width="100%"

          />
        </Box>
      </Box>
    </Box>
  )
}

export default Modelina
