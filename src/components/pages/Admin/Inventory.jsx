import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import { Grid, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: "100px",
    height: " 200px",
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

function Inventory() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [id, setId] = useState("");
  const [cover, setCover] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");

  const [products, setProducts] = useState([]);

  const data = {
    id: id,
    name: name,
    cover: cover,
    price: price,
    inventory: inventory,
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
    await axios.put(`http://localhost:5000/products/${id}`, data);
    setOpen(false);
    loadUsers();
  };

  const editHandler = (id) => {
    axios.get(`http://localhost:5000/products/${id}`).then((res) => {
      setOpen(true);
      setId(res.data.id);
      setName(res.data.name);
      setCover(res.data.cover);
      setPrice(res.data.price);
      setInventory(res.data.inventory);
    });
  };

  return (
    <>
      {/*   navAdmin */}
      <Box sx={{ marginTop: "100px", background: "#F3F3F3", minWidth: "30%" }}>
        <Toolbar width="100%">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" sx={{ padding: "15px" }}>
                پنل مدیریت فروشگاه
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row">
                <Box>
                  <Link
                    to="/admin/produce"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "8px 15px",
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                    >
                      کالا ها
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/admin/inventory"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "8px 15px",
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                    >
                      موجودی
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/admin/orders"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "8px 15px",
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                    >
                      سفارش ها
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>

      <Box marginTop="100px" marginX="10px">
        {/* top section */}
        <Box marginRight="180px" padding="10px" marginBottom="40px">
          <Box>
            <Typography variant="h5"> قیمت و موجودی </Typography>
          </Box>
        </Box>

        {/* modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className={classes.modal} padding="15px">
            <Box component="form">
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">ویرایش </Typography>
                <Button onClick={() => setOpen(false)}>
                  <CancelOutlinedIcon />
                </Button>
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
                <Typography>موجودی :</Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    component="input"
                    value={inventory}
                    onChange={(e) => setInventory(e.target.value)}
                    type="number"
                    width="100%"
                    height="30px"
                    marginY="10px"
                  ></Box>
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
                  {id ? "ویرایش" : "افزودن"}
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
                  انصراف
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
                <Typography variant="h6">تصویر</Typography>
              </Box>

              <Box>
                <Typography variant="h6"> قیمت </Typography>
              </Box>
              <Box>
                <Typography variant="h6"> موجودی </Typography>
              </Box>
              <Box>
                <Typography variant="h6"> ویرایش </Typography>
              </Box>
            </Box>
            {products.map((data, index) => (
              <Box className={classes.tr} key={index}>
                <Box>
                  <Box className={classes.imgContainer}>
                    <img width="90%" src={data.cover} alt="" />
                   <Box marginY="10px">
                   <Typography variant="subtitle1"> {data.name}</Typography>
                   </Box>
                  </Box>
                </Box>
                <Box>
                  <Box component="span" className={classes.name}>
                    {data.price}
                  </Box>
                </Box>

                <Box>
                  <Box component="span" className={classes.name}>
                    {data.inventory}
                  </Box>
                </Box>
                <Box>
                  <Box component="span" className={classes.name}>
                    <Button sx={{fontSize:"18px"}} onClick={() => editHandler(data.id)}>
                      ویرایش
                    </Button>
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

export default Inventory;
