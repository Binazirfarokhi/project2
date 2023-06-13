import {Container, Grid, Paper, Typography, Button, TextField, Box} from "@mui/material";
import SignInIcon from '../../assets/signin.jpg';
import {useState} from "react";
import {Link} from "react-router-dom";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className={'pt-5'}>
      <Paper className={'mt-5'} elevation={4}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={SignInIcon} width={'100%'}/>
          </Grid>
          <Grid className={'p-3'} item xs={12} lg={6}>
            <form onSubmit={handleLogin}>
              <Typography variant={'h4'} className={'mt-4'}>
                Welcome Back!
              </Typography>
              <Box className={'mt-3'}>
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
              </Box>
              <Box className={'mt-3'}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Box>
              <Box className={'mt-3'} textAlign={'end'}>
                <Link to={''}>Forget Password?</Link>
              </Box>
              <Box className={'mt-4'}>
                <Button type={'submit'} variant="contained" color="primary" >
                  Login
                </Button>
              </Box>
              <Box className={'mt-5 pt-5 d-flex justify-content-center'}>
                <Typography variant={'subtitle1'} className={'me-2'}>
                  Do not have an account?
                </Typography>
                <Link to={'/register'}>
                  Sign Up
                </Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}