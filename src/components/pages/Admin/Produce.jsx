import {
  Box,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
    minWidth: "400px",
  },
}));

function Produce() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
 
  const [cover, setCover] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");


  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const data = {
    name: name,
    cover: cover,
    price: price,
    material: material,
    category:category,
    size:size
  };

  const submit = async(e) => {
    e.preventDefault();
   await axios.post("http://localhost:5000/products", data).then(navigate("/"));
  };

  const loadUsers =async () => {
   await axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data.reverse());
    });
  };

  const deleteHandler =async (id) => {
   await axios.delete(`http://localhost:5000/products/${id}`).then(loadUsers());
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const Edit=(id)=>{
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setOpen(true)
      setName(res.data.name);
      setCover(res.data.cover);
      setPrice(res.data.price);
      setMaterial(res.data.material);
      setSize(res.data.size);
      setCategory(res.data.category);

    });
  }

  const Update=(e,id)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/products/${id}`,data).then (navigate("/admin"))
  }

  
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
          <Box component="form" onSubmit={submit}>
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
                  sx={{
                    padding: "5px",
                    height: "20%",
                    width: "20%",
                    minWidth: "100px",
                    marginRight: "5px",
                  }}
                  variant="contained"
                  component="label"
                >
                  Upload File
                  <input
                     hidden
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                  />
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
              <Typography> دسته بندی :</Typography>
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
              <Typography>قیمت :</Typography>
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
              <Typography> سایز :</Typography>
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
              <Typography> جنس :</Typography>
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
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginY: "10px",
                  padding: "8px 15px",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={Update}
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
            <Box>
              <Typography variant="h6">کد</Typography>
            </Box>
            <Box>
              <Typography variant="h6">تصویر</Typography>
            </Box>
            <Box>
              <Typography variant="h6">نام کالا</Typography>
            </Box>
            <Box>
              <Typography variant="h6">دسته بندی</Typography>
            </Box>
            <Box>
              <Typography variant="h6"> عملیات </Typography>
            </Box>
          </Box>
          {products.map((data, index) => (
            <Box className={classes.tr} key={index}>
              <Box>
                <Box component="span" className={classes.name}>
                  {data.id}
                </Box>
              </Box>
              <Box>
                <Box className={classes.imgContainer}>
                  <img width="90%" src={data.cover} alt="" />
                </Box>
              </Box>
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
                  <Button  onClick={() => (Edit(data.id))}> ویرایش </Button>
                  <Button onClick={() => (deleteHandler(data.id))}>حذف</Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Produce;
