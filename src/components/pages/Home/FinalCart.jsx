import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function FinalCart() {
  return (
    <Box marginTop="150px" marginX="60px" padding="10px" width="50%">
      <Box marginBottom="40px" minWidth="500px">
        <Box marginRight="20px">
          <Typography variant="h5"> نهایی کردن خرید  </Typography>
        </Box>
      </Box>
   <Box component="form">
   <Stack  >
      <Box margin="10px" >
     
      <TextField id="standard-basic" placeholder="نام " fullWidth variant="standard" />
      </Box>
      <Box margin="10px">
      <TextField id="standard-basic" placeholder="نام خانوادگی" fullWidth variant="standard" />
      </Box>
      </Stack>
      <Stack  >
      <Box margin="10px">
      <TextField id="standard-basic" placeholder="تلفن همراه " fullWidth variant="standard" />
      </Box>
      <Box margin="10px">
      <TextField id="standard-basic" placeholder="تاریخ تحویل"  fullWidth variant="standard" />
      </Box>
      </Stack>
     
      <Box margin="10px">
      <TextField id="standard-basic" placeholder="آدرس" fullWidth multiline  rows={2} variant="standard" />

      </Box>
      <Box display="flex" justifyContent="center">
        <Button
           variant="contained"
          sx={{
            padding: "8px 15px",
            color: "white",
            fontWeight: "bold",
            marginTop:"20px"
          }}
        >
         ذخیره
        </Button>
      </Box>
   </Box>
    </Box>
  );
}

export default FinalCart;
