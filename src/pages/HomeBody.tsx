import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import horse from "../asserts/horse.jpg";
import Header from "../components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { BorderColor } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {

        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {         
          '&:hover': {
            backgroundColor: '#77ba00', 
            color: 'white', 
            borderColor:"white"
          },
        },
      },
    },
  },
});
const containerStyle = {
  backgroundImage: `url(${horse})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '300px',
  width: '100%',
};

const HomeBody: FC = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="hero"
        minHeight="90vh"
        style={containerStyle}
        sx={{
          backgroundImage:
            "linear-gradient(to right,#043324,#104131, #05402d)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          position: "relative",
          pb: { xs: 8, md: 10 },
        }}

      >
        <Header />
        <Container
          sx={{
            pt: 10,
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{ flexDirection: { xs: "column", md: "unset" } }}
          >
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mb: 3, marginLeft: "-100px" }}>
                  <Typography
                    component="h2"
                    sx={{
                      color: "white",
                      fontSize: { xs: 10, md: 55 },
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                     Welcome to Lloyds Bank
                   
                    <br />

                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" }, }}>
                  <Typography sx={{ color: "white", lineHeight: 1.6, fontSize: 25 }}>
                  We Value Your Money
                  </Typography>
                </Box>

                <Stack direction={"row"} spacing={3}>
                  <Button
                    size="large"
                    sx={{ px: 5, borderRadius: 10, backgroundColor: "#043324",borderColor: "white" }}
                    onClick={() => navigate("/login")}
                    variant="contained"
                  >
                    Log In
                  </Button>
                  <Button
                    size="large"
                    sx={{
                      px: 5,
                      borderRadius: 10,
                      color: "white",
                      borderColor: "white",
                    }}
                    onClick={() => navigate("/signup")}
                    variant="outlined"
                  >
                    Signup
                  </Button>
                </Stack>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomeBody;
