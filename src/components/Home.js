import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Borrowers from './Borrowers';
import Welcome from './Welcome';
import AddEdit from './AddEdit';
import Team from './Team';




function Home() {
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState("Welcome");
  const location = useLocation();
  const regex = /^([^@]+)/;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const match = location.state.id.match(regex);
  const beforeAtSymbol = match ? match[1] : null;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text)
    console.log(`Clicked on ${text}`);
  };
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
          }
        }
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            marginTop: "64px"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            position: "fixed",
            top: "14px",
            backgroundColor: "#fff",
            color: "#00553e",
            '&:hover': {
              backgroundColor: '#77ba00',
              color: 'white',
              borderColor: "white"
            },
          },
        },
      },
    }
  });

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Welcome', 'Loans', 'Add User', 'Borrowers', 'Loan Plans', 'Team'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <ArrowForwardIosIcon style={{ color: "#77ba00" }} /> :
                  <ArrowForwardIosIcon style={{ color: "#00553e" }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Button onClick={toggleDrawer(true)}><WidgetsIcon /> Menu</Button>
        <Drawer open={open} onClose={toggleDrawer(false)} >
          {DrawerList}
        </Drawer>
        <div style={{ padding: '20px' }}>
         
          {selectedItem && (
            <div>
              {selectedItem === 'Welcome' &&
                <><h2 className="welcome">Hello {capitalizeFirstLetter(beforeAtSymbol)}!!! Welcome to LLOYDS BANK</h2><Welcome/></>}
              {selectedItem === 'Loans' &&
                <p>Loans Page</p>}
              {selectedItem === 'Add User' &&
                <AddEdit />}
              {selectedItem === 'Borrowers' &&
                <Borrowers />}
              {selectedItem === 'Loan Plans' &&
                <p>Loan Plans </p>}
              {selectedItem === 'Team' &&
                <Team/>}
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
export default Home;


