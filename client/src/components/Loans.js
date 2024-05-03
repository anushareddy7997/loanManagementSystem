import { useNavigate, Link } from "react-router-dom";
import './Loans.css';
import { Box, Grid, Paper } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
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
                    position: "relative",
                    backgroundColor: "#006A4D",
                    color: "#fff",
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

const Loans = ({ updateBooleanValueReadMore }) => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <>
                <Box sx={{
                    backgroundImage:
                        "linear-gradient(to right,#043324,#104131, #05402d)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    position: "relative",
                    pb: { xs: 8, md: 10 },
                    height: "662px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}>
                    <div className="login-form-container">
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item><HouseIcon style={{ fontSize: "200px" }} /> </Item>
                            </Grid>
                            <Grid item xs={4} sx={{ color: "red" }}>
                                <Link className="link-button" to="/abouthomeloan">Read More</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>Home Loan</Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Button
                                    size="large"
                                    sx={{ px: 5, borderRadius: 10, borderColor: "white" }}
                                    onClick={() => navigate("/homeloanform")}
                                    variant="contained"
                                > Apply Now </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </>
        </ThemeProvider>
    )
}

export default Loans