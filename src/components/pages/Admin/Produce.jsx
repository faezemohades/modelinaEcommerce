import { Box, Button, Modal, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import {
 
  Grid,
  Stack,
  Toolbar,
 } from "@mui/material";
 import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: "100px",
    height: " 100px",
    position: "relative",
  },

  table: {
    width: "80vw",
    marginBottom: "20px",
    margin: "auto"
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
    paddingBottom: "20px"
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
    minWidth: "320px",
  },
}));

function Produce() {


  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [id, setId] = useState("");
  const [cover, setCover] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [desc, setDesc] = useState("");

  const [products, setProducts] = useState([]);

  const data = {
    id: id,
    name: name,
    cover: cover,
    price: price,
    material: material,
    category: category,
    size: size,
    desc:desc,
  };
  const loadUsers = async () => {
    await axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data.reverse());
    });
  };
  
    useEffect(() => {
      loadUsers();
      
    }, []);

  const submitHandler = async () => {
    if (data.id) {
      await axios
        .put(`http://localhost:5000/products/${id}`, data)
          setOpen(false);
          loadUsers();
       
    } else {
      await axios.post("http://localhost:5000/products", data);
      setOpen(false);
      loadUsers();
      console.log(cover)

    }
  };
 

  const editHandler = (id) => {
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setOpen(true);
      setId(res.data.id);
      setName(res.data.name);
      setCover(res.data.cover);
      setPrice(res.data.price);
      setMaterial(res.data.material);
      setSize(res.data.size);
      setCategory(res.data.category);
      setDesc(res.data.desc);

    });
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setOpen(false);
    loadUsers();
  };

  return (
   <>
     {/* // navAdmin */}
    <Box sx={{ marginTop: "65px", background: "#F3F3F3" }}>
      <Toolbar >
        <Grid container>
          <Grid item xs={6} >
            <Typography variant="h5" sx={{ padding: "30px 10px" }}>
              ?????? ???????????? ??????????????
            </Typography>
          <Grid
            item
            xs={6}
            
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row">
              <Box>
                <Link to='/admin/produce' style={{  textDecoration: "none",
        color: "grey"}}>
                <Button
                   variant="text"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ????????
                </Button>
                </Link>
              </Box>
              <Box>
              <Link to='/admin/inventory' style={{  textDecoration: "none",
        color: "grey"}}>
                <Button
                  variant="text"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ????????????
                </Button>
                </Link>
              </Box>
              <Box>
              <Link to='/admin/orders' style={{  textDecoration: "none",
        color: "grey"}}>
                <Button
                  variant="text"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ??????????  
                </Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>

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
          <Typography variant="h5">???????????? ????????????</Typography>
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
            ???????????? ????????
          </Button>
        </Box>
      </Box>

      {/* modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className={classes.modal} padding="15px">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">
                {id ? "???????????? ????????" : "???????????? ????????"}
              </Typography>
              <Button onClick={() => setOpen(false)}>
                <CancelOutlinedIcon />
              </Button>
            </Box>
         
          <Box component="form">
            <Box>
              <Typography>?????? ???????? :</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  width="100%"
                  height="30px"
                  marginY="10px"
                ></Box>
              </Box>
            </Box>
            <Box>
              <Typography> ???????? ???????? :</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="input"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  width="100%"
                  height="30px"
                  marginY="10px"
                ></Box>
              </Box>
            </Box>

            <Box>
              <Typography>???????? :</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  width="100%"
                  height="30px"
                  marginY="10px"
                ></Box>
              </Box>
            </Box>
            <Box>
              <Typography> ???????? :</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="input"
                  value={size}
                  type="text"
                  onChange={(e) => setSize(e.target.value)}
                  width="100%"
                  height="30px"
                  marginY="10px"
                ></Box>
              </Box>
            </Box>
            <Box>
              <Typography> ?????? :</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  component="input"
                  type="text"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  width="100%"
                  height="30px"
                  marginY="10px"
                ></Box>
              </Box>
            </Box>
            <Box>
              <Typography>?????????????? :</Typography>
              <Box
                marginY="10px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <TextareaAutosize style={{ width: "100%" }} minRows={5}  onChange={(e) => setDesc(e.target.value)} value={desc}/>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  marginY: "10px",
                  padding: "8px 15px",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={submitHandler}
              >
                {id ? "????????????" : "????????????"}
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                type="submit"
                color="error"
                sx={{
                  marginY: "10px",
                  padding: "8px 15px",
                  fontWeight: "bold",
                }}
                onClick={() => setOpen(false)}
              >
                ????????????
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* table */}
      <Box flex={4} sx={{ width: "90vw" }}>
        <Box className={classes.table}>
          <Box className={classes.trTitle}>
              <Box>
              <Typography variant="h6">?????? ????????</Typography>
            </Box>
            <Box>
              <Typography variant="h6">???????? ????????</Typography>
            </Box>
            <Box>
              <Typography variant="h6"> ???????????? </Typography>
            </Box>
          </Box>
          {products.map((data, index) => (
            <Box className={classes.tr} key={index}>
              <Box>
                <Box component="span" className={classes.name}>
                  {data.name}
                </Box>
              </Box>
              <Box>
                <Box component="span" className={classes.name}>
                  {data.category}
                </Box>
              </Box>
              <Box>
                <Box component="span" className={classes.name}>
                  <Button sx={{fontSize:"18px"}} onClick={() => editHandler(data.id)}> ???????????? </Button>
                  <Button  sx={{fontSize:"18px"}} onClick={() => deleteHandler(data.id)}>??????</Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
   </>
  );
}

export default Produce;
