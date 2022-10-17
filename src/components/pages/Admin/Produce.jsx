import {
    Autocomplete,
    Box,
    Button,
    Modal,
    TextareaAutosize,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { makeStyles } from "@mui/styles";
  import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
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
  
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "auto",
      backgroundColor: "white",
      border: "2px solid #B5B5B5",
      boxShadow: "24",
      minWidth:"400px",
     },
  }));
  
  function Produce() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const category = ["شال", "روسری"];
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
            <Typography variant="h5">مدیریت کالاها</Typography>
          </Box>
          <Box>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              sx={{
                padding: "8px 15px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              افزودن کالا
            </Button>
          </Box>
        </Box>
  
        {/* modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className={classes.modal} padding="15px">
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6"> افزودن / ویرایش کالا</Typography>
                <Button onClick={() => setOpen(false)}>
                  <CancelOutlinedIcon />
                </Button>
              </Box>
              <Box>
                <Typography>تصویر کالا :</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    component="input"
                    width="75%"
                    height="30px"
                    marginY="10px"
                  ></Box>
                  <Button
                    sx={{ padding: "5px", height: "20%",width:"20%",minWidth:"100px",marginRight:"5px" }}
                    variant="contained"
                    component="label"
                  >
                    Upload File
                    <input type="file" hidden />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography>نام کالا :</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    component="input"
                    width="100%"
                    height="30px"
                    marginY="10px"
                  ></Box>
                </Box>
              </Box>
              <Box>
                <Typography> دسته بندی :</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Autocomplete
                    sx={{ width: "100%", marginY: "10px" }}
                    options={category}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              </Box>
  
              <Box>
                <Typography>توضیحات :</Typography>
                <Box
                  marginY="10px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TextareaAutosize style={{ width: "100%" }} minRows={5} />
                </Box>
              </Box>
              <Box display="flex" justifyContent="center"  >
                <Button
                  onClick={() => setOpen(false)}
                  variant="contained"
                  sx={{
                    marginY: "10px",
  
                    padding: "8px 15px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ذخیره
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
  
        {/* table */}
        <Box flex={4} sx={{ width: "90vw" }}>
          <Box className={classes.table}>
            <Box className={classes.trTitle}>
              <Box class="col">
                <Typography variant="h6">تصویر</Typography>
              </Box>
              <Box class="col">
                {" "}
                <Typography variant="h6">نام کالا</Typography>
              </Box>
              <Box class="col">
                {" "}
                <Typography variant="h6">دسته بندی</Typography>
              </Box>
              <Box class="col">
                {" "}
                <Typography variant="h6"> عملیات </Typography>
              </Box>
            </Box>
            <Box className={classes.tr}>
              <Box class="col">
                <Box className={classes.imgContainer}>
                  <img
                    width="90%"
                    src="https://limooshop.com/13575-large_default/%D8%B4%D8%A7%D9%84-%D9%85%D8%AC%D9%84%D8%B3%DB%8C-%D9%86%DA%AF%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1-2446.jpg"
                    alt=""
                  />
                </Box>
              </Box>
              <Box class="col">
                <Box component="span" className={classes.name}>
                  شال نخی
                </Box>
              </Box>
              <Box class="col">
                <Box component="span" className={classes.name}>
                  شال
                </Box>
              </Box>
              <Box class="col">
                <Box component="span" className={classes.name}>
                  <Button>ویرایش</Button>
                  <Button>حذف</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default Produce;
  