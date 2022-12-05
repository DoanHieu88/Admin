import React, { useState } from "react";
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
import { SignupPayload } from "../../store/auth/type";
import { getUserByEmail, handleRegister } from "../../handleApi/register";
const theme = createTheme();

const Register :React.FC= () => {
  const [isSessageSuccess, setIsMessageSuccess] = useState<boolean>(false);
  const [messageErr, setMessageErr] = useState<string>("");
  const [dataSubmit, setDataSubmit] = useState<SignupPayload>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    company: "",
    password: "",
    comfirmPassword: "",
  });

  const onChangeValueSubmit = (type: string, value: string) => {
    setDataSubmit({
      ...dataSubmit,
      [type]: value,
    });
    setMessageErr("");
    setIsMessageSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await getUserByEmail(dataSubmit.email);
    if (user) {
      setMessageErr("Email is Exist");
      return;
    } else if (dataSubmit.password.length < 8) {
      setMessageErr("Password must be more than 8 characters");
      return;
    } else if (dataSubmit.password !== dataSubmit.comfirmPassword) {
      setMessageErr("Comfirm password does not match");
      return;
    } else {
      handleRegister({ ...dataSubmit })
        .then((res) => {
          if (res) {
            setDataSubmit({
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              phone: "",
              company: "",
              password: "",
              comfirmPassword: "",
            });
            setIsMessageSuccess(true);
            setTimeout(() => {
              setIsMessageSuccess(false);
            }, 3000);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
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
          {isSessageSuccess && (
            <h4 className="register-admin_message__success">
              create admin success
            </h4>
          )}
          {messageErr && (
            <h4 className="register-admin_message__error">{messageErr}</h4>
          )}
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
                  value={dataSubmit.firstName}
                  onChange={(e) => {
                    onChangeValueSubmit("firstName", e.target.value);
                  }}
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
                  value={dataSubmit.lastName}
                  onChange={(e) => {
                    onChangeValueSubmit("lastName", e.target.value);
                  }}
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
                  type={"email"}
                  value={dataSubmit.email}
                  onChange={(e) => {
                    onChangeValueSubmit("email", e.target.value);
                  }}
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
                  value={dataSubmit.address}
                  onChange={(e) => {
                    onChangeValueSubmit("address", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="company"
                  label="Company"
                  id="company"
                  fullWidth
                  size="small"
                  value={dataSubmit.company}
                  onChange={(e) => {
                    onChangeValueSubmit("company", e.target.value);
                  }}
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
                  type={"number"}
                  value={dataSubmit.phone}
                  onChange={(e) => {
                    onChangeValueSubmit("phone", e.target.value);
                  }}
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
                  value={dataSubmit.password}
                  onChange={(e) => {
                    onChangeValueSubmit("password", e.target.value);
                  }}
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
                  value={dataSubmit.comfirmPassword}
                  onChange={(e) => {
                    onChangeValueSubmit("comfirmPassword", e.target.value);
                  }}
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
