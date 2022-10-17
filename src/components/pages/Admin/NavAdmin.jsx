import {
  Box,
  Button,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavAdmin() {
 
  return (
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
                <Link to='/admin/produce' style={{  textDecoration: "none",
        color: "grey"}}>
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
              <Link to='/admin/inventory' style={{  textDecoration: "none",
        color: "grey"}}>
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
              <Link to='/admin/orders' style={{  textDecoration: "none",
        color: "grey"}}>
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
  );
}

export default NavAdmin;
