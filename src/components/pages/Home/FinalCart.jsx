import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function FinalCart() {
  return (
    <Box marginTop="150px" marginX="60px" padding="10px" width="50%">
      <Box marginBottom="40px" minWidth="500px">
        <Box>
          <Typography variant="h5">مدیریت کالاها</Typography>
        </Box>
      </Box>
      <Stack  >
      <Box margin="10px" width="100%">
        <Typography component="label" variant="h6">
          نام :
        </Typography>
        <Box   component="input" required marginX="15px" />
      </Box>
      <Box margin="10px">
        <Typography component="label" variant="h6">
            نام خانوادگی :
        </Typography>
        <Box component="input" required marginX="15px" />
      </Box>
      </Stack>
      <Stack  >
      <Box margin="10px">
        <Typography component="label" variant="h6" >تاریخ تحویل :</Typography>
        <Box component="input" required marginX="15px"/>

      </Box>
      <Box margin="10px">
        <Typography component="label" variant="h6" >تلفن همراه :</Typography>
        <Box component="input" required marginX="15px"/>

      </Box>
      </Stack>
     
      <Box margin="10px">
        <Typography component="label" variant="h6" >آدرس :</Typography>
        <Box component="input" required marginX="15px"/>

      </Box>
      <Box display="flex" justifyContent="center">
        <Button
           variant="contained"
          sx={{
            padding: "8px 15px",
            color: "white",
            fontWeight: "bold",
          }}
        >
         ذخیره
        </Button>
      </Box>
    </Box>
  );
}

export default FinalCart;
