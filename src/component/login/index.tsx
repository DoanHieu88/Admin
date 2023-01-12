import React, { useState,useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginPayload } from "../../store/auth/type";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/auth/action";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [dataSubmit, setDataSubmit] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const onChangeValueSubmit = (type: string, value: string) => {
    setDataSubmit({
      ...dataSubmit,
      [type]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginRequest({ ...dataSubmit }));
  };

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      navigate('/')
    }
  },[])

  return (
    <React.Fragment>
      <Container component={"main"} maxWidth={"xs"} sx={{ mt: 10 }}>
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
          <h2>Sign In</h2>
          <Box component={"form"} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
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
              <Grid item sm={12}>
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
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;
