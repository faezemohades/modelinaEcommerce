import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "40vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  title: {
    
    width: "100%",
    paddingTop: "40px",
    textAlign: "center",
  },
  head: {
    padding: "15px",
  },
}));

function SubmitForm() {
  const classes = useStyles();
  const [textValue, setTextValue] = useState({ name: "", email: "", decs: "" });
  const handleResetValue = () => {
    setTextValue({ name: "", email: "", decs: "" });
  };
  return (
    <Box className={classes.container}>
      <Box>
        <Box className={classes.title}>
          <Typography variant="h4">با ما در تماس باشید</Typography>
        </Box>
        <Box>
          <Typography variant="h6" paddingY={3} textAlign="center" sx={{color: "gray",}}>
            شما می توانید انتقادات و پیشنهادات خود را از طریق فرم زیر با ما در
            میان بگذارید
          </Typography>
        </Box>
        <Box
        component="form"
           action="https://formsubmit.co/popon32238@24rumen.com" method="POST" target="_blank">
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
             sx={{ color:"white",fontWeight:"bold",width:"80px",fontSize:'18px'}}
            >
              ارسال
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubmitForm;
