import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Button, Stack, ThemeProvider, Tooltip } from "@mui/material";
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
          backgroundColor:"#043324",
          color: 'white', 
        },
      },
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundcolor: "red",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
          <HomeIcon/> 
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
            }}
          >LLOYDS BANK
          </Typography>
          <span > <img src={logo} alt="logo" style={{height:"52px", marginLeft:"-561px"}}/></span>
          <Stack direction="row" spacing={4} marginRight={10}>
            <Button
              onClick={() => navigate("/cards")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Cards
            </Button>
            <Button
              onClick={() => navigate("/transactions")}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Transactions
            </Button>
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
          </Stack>

          <Search sx={{ mr: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          
          <Tooltip
            title={isAuthenticated ? "Log Out" : "Log In"}
            onClick={signoutHandler}
          >
            <IconButton sx={{ color: "white" }}>
              {isAuthenticated ? <ExitToAppIcon /> : <AccountCircleIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
