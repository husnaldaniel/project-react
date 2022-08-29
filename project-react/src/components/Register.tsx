import logo from "./logo.svg";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Container } from "./Container";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bg from "../assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [inputEmail, setEmail] = useState("");
  const [inputPass, setPass] = useState("");
  const [showPass, setshowPass] = useState(false);
  const nav = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          height: window.innerHeight,
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        children={
          <Container
            style={{
              display: "flex",
              padding: "50px",
              width: "300px",
              height: "450px",
              backgroundImage:
                "linear-gradient(to right top, rgba(5, 25, 55, 0.9), rgba(0, 77, 122, 0.7), rgba(0, 135, 147, 0.6), rgba(0, 191, 114, 0.7), rgba(168, 235, 18, 0.9))",
              borderRadius: "10px",
            }}
            children={
              <div>
                <label style={{ color: "white" }}>REGISTER</label>
                <br />
                <div>
                  <br />
                  <TextField
                    fullWidth
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                    id="outlined-basic"
                    label="Email"
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "3px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    error={!validateEmail(inputEmail) && inputEmail != ""}
                    helperText={
                      !validateEmail(inputEmail) && inputEmail !== ""
                        ? "Email format is not valid!"
                        : ""
                    }
                  />
                  <TextField
                    fullWidth
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                    id="outlined-basic"
                    label="First Name"
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "3px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    type="text"
                    // onChange={(e) => setEmail(e.target.value)}
                    // error={!validateEmail(inputEmail) && inputEmail != ""}
                    // helperText={
                    //   !validateEmail(inputEmail) && inputEmail !== ""
                    //     ? "Email format is not valid!"
                    //     : ""
                    // }
                  />

                  <TextField
                    fullWidth
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                    id="outlined-basic"
                    label="Last Name"
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "3px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    type="text"
                    // onChange={(e) => setEmail(e.target.value)}
                    // error={!validateEmail(inputEmail) && inputEmail != ""}
                    // helperText={
                    //   !validateEmail(inputEmail) && inputEmail !== ""
                    //     ? "Email format is not valid!"
                    //     : ""
                    // }
                  />

                  <TextField
                    fullWidth
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                    id="outlined-basic"
                    label="Password"
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "3px",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    type={showPass ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              showPass ? setshowPass(false) : setshowPass(true)
                            }
                            edge="end"
                          >
                            {showPass ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <Box m={2} pt={1}>
                  <Button variant="contained">Register</Button>
                  <br />
                  <br />
                  <Button
                    variant="text"
                    style={{ color: "white" }}
                    onClick={() => {
                      nav("/", { replace: true });
                    }}
                  >
                    Already a user?
                  </Button>
                </Box>
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default Register;
