import {
    Box,
   Button,
   FormControl,
   FormControlLabel,
   Modal,
   Radio,
   RadioGroup,
   Stack,
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
   tableModal: {
     width: "80%",
     marginBottom: "20px",
     margin: "auto",
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
     minWidth: "400px",
   },
 }));
 
 function Orders() {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
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
           <Typography variant="h5">مدیریت سفارش ها</Typography>
         </Box>
         <Box>
           <FormControl>
             <RadioGroup
               row
               aria-labelledby="demo-radio-buttons-group-label"
               defaultValue="female"
               name="radio-buttons-group"
               //   value={ }
               //   onChange={ }
             >
               <FormControlLabel
                 value="female"
                 control={<Radio />}
                 label="سفارش های تحویل شده"
               />
               <FormControlLabel
                 value="male"
                 control={<Radio />}
                 label="سفارش های در انتظار تحویل"
               />
             </RadioGroup>
           </FormControl>
         </Box>
       </Box>
 
       {/* modal */}
       <Modal open={open} onClose={() => setOpen(false)}>
         <Box className={classes.modal} padding="15px">
           <Box>
             <Box display="flex" justifyContent="space-between">
               <Typography variant="h6"> نمایش سفارش</Typography>
               <Button onClick={() => setOpen(false)}>
                 <CancelOutlinedIcon />
               </Button>
             </Box>
             <Box>
               {/* top */}
               <Box sx={{ marginX: "20px" }}>
                 <Stack direction="row">
                   <Typography variant="subtitle1" sx={{ marginLeft: "20px" }}>
                     {" "}
                     نام مشتری :
                   </Typography>
                   <Typography variant="subtitle1"> فایزه محدث</Typography>
                 </Stack>
                 <Stack direction="row">
                   <Typography variant="subtitle1" sx={{ marginLeft: "20px" }}>
                     {" "}
                     آدرس :
                   </Typography>
                   <Typography variant="subtitle1">
                     {" "}
                     تهرانپارس خیابان استخر کوچه کاشی پلاک 46 طبقه 4
                   </Typography>
                 </Stack>
                 <Stack direction="row">
                   <Typography variant="subtitle1" sx={{ marginLeft: "20px" }}>
                     {" "}
                     تلفن :
                   </Typography>
                   <Typography variant="subtitle1"> 77114869 </Typography>
                 </Stack>
                 <Stack direction="row">
                   <Typography variant="subtitle1" sx={{ marginLeft: "20px" }}>
                     {" "}
                     زمان تحویل :
                   </Typography>
                   <Typography variant="subtitle1"> 1399/05/14 </Typography>
                 </Stack>
                 <Stack direction="row">
                   <Typography variant="subtitle1" sx={{ marginLeft: "20px" }}>
                     {" "}
                     زمان سفارش :
                   </Typography>
                   <Typography variant="subtitle1"> 1399/05/12 </Typography>
                 </Stack>
               </Box>
               {/* bottom */}
               <Box>
                 <Box flex={4}  >
                   <Box className={classes.tableModal}>
                     <Box className={classes.trTitle}>
                       <Box class="col">
                         <Typography variant="h6"> کالا   </Typography>
                       </Box>
                       <Box class="col">
                         {" "}
                         <Typography variant="h6">  قیمت   </Typography>
                       </Box>
                       <Box class="col">
                         {" "}
                         <Typography variant="h6">  تعداد </Typography>
                       </Box>
                        
                     </Box>
                     <Box className={classes.tr}>
                       <Box class="col">
                         <Box component="span" className={classes.name}>
                           شال نخی
                         </Box>
                       </Box>
                       <Box class="col">
                         <Box component="span" className={classes.name}>
                           100000
                         </Box>
                       </Box>
                       <Box class="col">
                         <Box component="span" className={classes.name}>
                           5
                         </Box>
                       </Box>
                      
                     </Box>
                   </Box>
                 </Box>
               </Box>
             </Box>
             <Box display="flex" justifyContent="center">
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
                 تحویل شد
               </Button>
             </Box>
           </Box>
         </Box>
       </Modal>
 
       {/* table */}
       <Box flex={4} sx={{ width: "90vw" }}>
         <Box className={classes.table}>
           <Box className={classes.trTitle}>
             <Box  >
               <Typography variant="h6">نام کاربر </Typography>
             </Box>
             <Box  >
               {" "}
               <Typography variant="h6"> مجموع مبلغ </Typography>
             </Box>
             <Box  >
               {" "}
               <Typography variant="h6"> زمان ثبت سفارش </Typography>
             </Box>
             <Box  >
               {" "}
               <Typography variant="h6">عملیات </Typography>
             </Box>
           </Box>
           <Box className={classes.tr}>
             <Box  >
               <Box component="span" className={classes.name}>
                 فایزه
               </Box>
             </Box>
             <Box  >
               <Box component="span" className={classes.name}>
                 5000000
               </Box>
             </Box>
             <Box  >
               <Box component="span" className={classes.name}>
                 21/11/1398{" "}
               </Box>
             </Box>
             <Box  >
               <Box component="span" className={classes.name}>
                 <Button onClick={() => setOpen(true)}>بررسی سفارش</Button>
               </Box>
             </Box>
           </Box>
         </Box>
       </Box>
     </Box>
   );
 }
 
 export default Orders;
 