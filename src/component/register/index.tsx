import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/system";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
const theme = createTheme();

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get("firstName"),
    });
  };

  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  id="firstName"
                  autoFocus
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="email"
                  label="Email Address"
                  id="email"
                  fullWidth
                  size="small"
                  //   value={""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="address"
                  label="Address"
                  id="address"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="phone"
                  label="Phone number"
                  id="phone"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="password"
                  label="Password"
                  id="password"
                  fullWidth
                  size="small"
                  type={"password"}
                  //   value={""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="comfirmPassword"
                  label="Comfirm Password"
                  id="comfirmPassword"
                  fullWidth
                  size="small"
                  type={"password"}
                  //   value={""}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Sign Up
            </Button>
          </Box>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <h4>
                Already have an account? <Link to={"/login"}> Sign in</Link>
              </h4>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* </ThemeProvider>    */}
    </React.Fragment>
  );
};

export default Register;
