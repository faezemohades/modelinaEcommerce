import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import VisibilityIcon from "@mui/icons-material/Visibility";
  import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
  import axios from "axios";
  import { useCookies } from "react-cookie";
  import { useNavigate } from "react-router-dom";
  import { Field, Form, Formik } from "formik";
  import * as Yup from "yup";
  
  const Login = () => {
    const navigate = useNavigate();
    const [cookie, setCookie ] = useCookies("token");
    console.log(cookie);
    const [showPass, setShowPass] = useState(false);
  
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email("لطفا ایمیل خود را وارد کنید ")
        .required("الزامی"),
      pass: Yup.string().required("الزامی").min(3),
    });
    const handleSubmit = async (values) => {
      try {
        const res = await axios.post("https://reqres.in/api/register", {
          email: values.email,
          password: values.pass,
        });
        localStorage.setItem("token", res.token);
        console.log(res);
        setCookie("token", res.data.token, {
          maxAge: 24 * 60 * 60 * 1000,
        });
        navigate("/admin");
      } catch (ex) {
        console.log(ex);
      }
    };
  
    const handlePassVisibility = () => {
      setShowPass(!showPass);
    };
  
    return (
      <>
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              pass: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {(handler) => (
              <Form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  sx={{ minHeight: "100vh" }}
                >
                  <Box
                    sx={{
                      color: "gray",
                       padding: "10px 0",
                      textAlign: "center",
                      marginTop: "70px",
                      width: "100%",
                    }}
                  >
                    <Typography variant="h5"> ورود به پنل مدیریت</Typography>
                  </Box>
                  {console.log(handler)}
                  <Paper elevation={2} sx={{ padding: 5 }}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <Field
                          as={TextField}
                          error={handler.errors.email}
                          sx={{ paddingTop: "10px",width:"100%" }}
                          type="email"
                          helperText=" ایمیل خود را وارد کنید"
                          

                          placeholder="آدرس ایمیل"
                          variant="outlined"
                          required
                          name="email"
                          value={handler.values.email}
                          onChange={handler.handleChange}
                          onBlur={handler.handleBlur}
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          as={TextField}
                          error={handler.errors.pass}
                          sx={{ paddingTop: "10px" ,width:"100%"}}
                          type={showPass ? "text" : "password"}
                          helperText=" رمز خود را وارد کنید"
 
                          placeholder="رمز ورود"
                          variant="outlined"
                          required
                          name="pass"
                          value={handler.values.pass}
                          onChange={handler.handleChange}
                          onBlur={handler.handleBlur}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handlePassVisibility}
                                  aria-label="toggle password"
                                  edge="end"
                                >
                                  {showPass ? (
                                    <VisibilityOffIcon />
                                  ) : (
                                    <VisibilityIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{width:"100%"}}

                          onClick={handler.handleSubmit}
                        >
                          ورود
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </>
    );
  };
  
  export default Login;
  