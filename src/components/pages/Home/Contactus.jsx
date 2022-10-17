import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import contact from "../../../assets/4.jpg";
import SubmitForm from './SubmitForm';

 const useStyles = makeStyles((theme) => ({
  title: {
    color: "gray",
    backgroundColor: "#FBFBFB",
    padding : "20px 0",
    textAlign: "center",
    marginTop: "70px",
    width: "100%",
  },
  head: {
    display:"flex",
    justifyContent:"center",
    paddingTop:"50px",
  },
  text: {
    color: "gray",
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    height: "auto",
    borderRadius: "10px",
  },

  icon: {
    paddingLeft: "15px",
    paddingTop: "5px",
  },
}));

function Contactus() {
  const classes = useStyles();

  return (
    <Box >
      <Box className={classes.title}>
        <Typography variant="h4" >
          تماس با ما
        </Typography>
      </Box>
      <Box className={classes.head}>
       <Box>
       <Typography variant="h5" paddingY={2}>دفتر مرکزی</Typography>
        <Typography variant="subtitle1">
          خیابان پامنار- کوچه حق پرست- بن بست بنی هاشمی- مجتمع تجاری سبحان- پلاک
          2- طبقه -2 واحد 10 | کد پستی : 1116735530
        </Typography>{" "}
       </Box>
      </Box>

      <Stack
      className={classes.box}
        justifyContent="center"
        gap={10}
        alignItems="center"
        paddingY={5}
        direction={{ xs: 'column', md: 'row' }}
       >
        <Box display="flex" >
          <Box className={classes.icon}>
            <AccessTimeIcon />
          </Box>
          <Box>
            <Box>
              <Typography variant="h5">ساعت کاری</Typography>
            </Box>
            <Box className={classes.text}>
              <Typography variant="subtitle1">
                شنبه تا چهارشنبه 9 الی 18{" "}
              </Typography>
              <Typography variant="subtitle1"> پنجشنبه 9 الی 15 </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex">
          <Box className={classes.icon}>
            <HeadsetMicIcon />
          </Box>
          <Box>
            <Box>
              <Typography variant="h5"> تلفن های تماس</Typography>
            </Box>
            <Box className={classes.text}>
              <Typography variant="subtitle1">
                دفتر مرکزی : 33996303{" "}
              </Typography>
              <Typography variant="subtitle1"> مدیریت : 09125941812</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex">
          <Box className={classes.icon}>
            <MailOutlineIcon />
          </Box>
          <Box>
            <Box>
              <Typography variant="h5"> آدرس ایمیل</Typography>
            </Box>
            <Box className={classes.text}>
              <Typography variant="subtitle1">info@Seliaco.com</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }}
>
        <img src={contact} className={classes.img} alt="Contact" />
      </Stack>
      <SubmitForm />
    </Box>
  )
}

export default Contactus
