import React from 'react'
import {
    AppBar,
    Badge,
    Box,
    Container,
    Grid,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Link} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import RedeemIcon from "@mui/icons-material/Redeem";
import logo from "../../../assets/images/logooo.png";
import DrawerComp from "./DrawerComp";
import {makeStyles} from "@mui/styles";
import { useState } from 'react';
import {useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: theme.palette.common.grey,
      
    }
}));
function Header() {
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <AppBar style={{ background: "#F3F3F3" }}>
    <Container>
    <Toolbar>

{/* humber menu */}
{isMatch ? (
  <>
    <DrawerComp />

  

    {/* leftbar */}
    <Stack
      direction="row"
      style={{ position: "absolute", left: "5%" }}
      margin={3}
    >
      <Box marginX="10px">
        <Link to="/login" className={classes.link}>
          <LoginIcon cursor="pointer" />
        </Link>
      </Box>
      <Badge  color="primary">
        <Link to="/shop" className={classes.link}>
        {totalQuantity}
           <RedeemIcon cursor="pointer" />
        </Link>
      </Badge>
    </Stack>
  </>
) : (
  <Grid container>
    {/* logo */}
    <Grid item xs={4} >
      <Link to="/" style={{ display: "flex", alignItems: "flex-end" }}>
        <img
          src={logo}
          alt="logo"
          title=" Home"
          width="110px"
          height="50px"
          margin="auto"
          borderradius="50%"
        />
      </Link>
    </Grid>

    {/* menu */}
    <Grid item xs={6} display="flex" alignItems="center">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Link to="/products" className={classes.link}>
          <Tab label="??????????????" />
        </Link>

        <Link to="/about" className={classes.link}>
          <Tab label="???????????? ????" />
        </Link>
        <Link to="/contact" className={classes.link}>
          <Tab label="???????? ???? ???? " />
        </Link>
      </Tabs>
    </Grid>

  
    {/* leftbar */}
    <Grid item xs={2}>
      <Box display="flex" justifyContent="flex-end" marginY={3}>
        <Box marginX="10px">
          <Link to="/login" className={classes.link}>
            <LoginIcon cursor="pointer" />
          </Link>
        </Box>
        <Badge color="primary">
          <Link to="/shop" className={classes.link}>
            {totalQuantity}
            <RedeemIcon cursor="pointer" />
          </Link>
        </Badge>
      </Box>
    </Grid>
  </Grid>
)}
</Toolbar>
    </Container>
    </AppBar>
    )
}

export default Header
