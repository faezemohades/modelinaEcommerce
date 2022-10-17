import React from 'react'
import {
    Box,
    Button,
    Typography,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  const useStyles = makeStyles((theme) => ({
    imgContainer: {
      width: "100px",
      height: " 100px",
      position: "relative",
    },
  
    table: {
      width: "80vw",
      marginBottom: "20px",
      margin: "auto",
      minWidth: "60%",
    },
    trTitle: {
      display: "flex",
      justifyContent: "space-evenly",
      borderBottom: "2px solid #E2E2E2",
      margin: "5px",
      paddingBottom: "20px",
    },
  
    tr: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "20px",
      borderBottom: "2px solid #E2E2E2",
      paddingBottom: "20px",
      minWidth: "60%",
    },
    name: {
      fontWeight: "500",
      fontSize: "18px",
    },
  
  }));
  
function Inventory() {
    const classes = useStyles();

  return (
    <Box marginTop="100px" marginX="10px">
    {/* top section */}
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="10px"
      marginBottom="40px"
    >
      <Box>
        <Typography variant="h5">مدیریت موجودی و قیمت ها</Typography>
      </Box>
      <Box>
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


    {/* table */}
    <Box flex={4} sx={{ width: "90vw" }}>
      <Box className={classes.table}>
        <Box className={classes.trTitle}>
          <Box  >
            <Typography variant="h6">کالا</Typography>
          </Box>
          <Box  >
            {" "}
            <Typography variant="h6"> قیمت  </Typography>
          </Box>
          <Box >
            {" "}
            <Typography variant="h6"> موجودی  </Typography>
          </Box>
          
        </Box>
        <Box className={classes.tr}>
          <Box  >
            <Box className={classes.imgContainer}>
              <img
                width="90%"
                src="https://limooshop.com/13575-large_default/%D8%B4%D8%A7%D9%84-%D9%85%D8%AC%D9%84%D8%B3%DB%8C-%D9%86%DA%AF%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1-2446.jpg"
                alt=""
              />
            </Box>
          </Box>
          <Box  >
            <Box component="span" className={classes.name}>
             200.000
            </Box>
          </Box>
          <Box  >
            <Box component="span" className={classes.name}>
              100
            </Box>
          </Box>
         
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default Inventory
