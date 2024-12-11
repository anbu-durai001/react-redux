import React,{useState, useEffect} from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    CssBaseline,
  } from "@mui/material";
  import { useDispatch, useSelector } from 'react-redux';
  import {fetchLoginfileDataRequest} from '../redux/login/Action';
  import {useNavigate} from 'react-router-dom';

const Login =()=>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector((state) => state.LoginReducer.data); 
    

    const submit=(event)=>{
        event.preventDefault();
        dispatch(fetchLoginfileDataRequest({username: userName, password: password}))
    }
    console.log('loginStatus', loginStatus)
    useEffect(() => {
        console.log('loginStatus', loginStatus)
        if (loginStatus) {
            console.log('loginStatus....', loginStatus)
          navigate("/home");
        }
      }, [loginStatus]);
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            </Box>
        </Box>
        </Container>
    )
}
export default Login;