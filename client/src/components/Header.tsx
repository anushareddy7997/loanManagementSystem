import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import {Button, Stack, ThemeProvider, Tooltip } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { SignoutAction } from "../redux/actions/SignoutAction";
import { UnknownAction } from "redux";
import { AppState } from "../redux/store";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme } from '@mui/material/styles';
import logo from '../asserts/logo.png'

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#043324",
          color: 'white',
        },
      },
    },
  },
});

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector<AppState, boolean>(
    (state) => state.auth.isAuthenticated
  );
  const signoutHandler = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(SignoutAction() as unknown as UnknownAction);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => navigate("/")}
            >
              <HomeIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              onClick={() => navigate("/")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
                fontWeight: 700,
                position: "fixed",
                left: "180px",
              }}
            >LLOYDS BANK
            </Typography>
            <span > <img src={logo} alt="logo" style={{ height: "52px", position: "fixed", top: "5px", left: "350px" }} /></span>
            <Stack direction="row" spacing={4} style={{marginLeft:"1000px"}}>
            <Link to="/investor" style={{textDecoration:"none"}}>   
            <Button
              onClick={() => navigate("/investor")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Investors
            </Button>
            </Link>
            <Link to="/contact" style={{textDecoration:"none"}}>
            <Button
              onClick={() => navigate("/transactions")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Contact Us
            </Button>
            </Link>
            <Link to="/about" style={{textDecoration:"none"}}>
            <Button
              onClick={() => navigate("/about")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
             
              }}
            >
              About
            </Button>
            </Link>
          </Stack>
            <Tooltip
              title={isAuthenticated ? "Log Out" : "Log In"}
              onClick={signoutHandler}
            >
              <IconButton sx={{ color: "white", position: "fixed", right: "10px" }}>
                {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
