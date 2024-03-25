"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

function getRandomImage() {
  return `https://source.unsplash.com/random?wallpapers&${Math.random()}`;
}

const defaultTheme = createTheme();

export default function Login() {
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());
  const router = useRouter();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBackgroundImage(getRandomImage());
  //   }, 50000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get("email"),
      password: data.get("password")
    };
  
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
  
      if (!response.ok) {
        throw new Error("Authentication failed");
      }
  
      const { token } = await response.json();
      // Store the token securely
      localStorage.setItem("token", token);

      // Redirect or perform any action upon successful authentication
      router.push("/team/dashboard")
      console.log("Authentication successful");
    } catch (error) {
      console.error("Authentication error:", error.message);
      // Handle authentication failure
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", position: "relative" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          container
          item
          xs={4}
          justifyContent="center"
          alignItems="center"
          elevation={6}
          square
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 1,
            maxWidth: 400,
            bgcolor: "none",
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              color="grey"
              sx={{ border: "3px solid green", borderRadius: 1 }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                style: { backgroundColor: "transparent", color: "white" },
              }}
              InputLabelProps={{
                style: { backgroundColor: "transparent", color: 'white' } // Change color here
              }}

            />

            <TextField
              sx={{ border: "3px solid green", borderRadius: 1 }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: { backgroundColor: "transparent", color: "white" },
              }}
              InputLabelProps={{
                style: { backgroundColor: "transparent", color: 'white' } // Change color here
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign In
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
