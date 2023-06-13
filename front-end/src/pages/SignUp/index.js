import {Container, Grid, Paper, Typography, Button, TextField, Box} from "@mui/material";
import SignUpIcon from '../../assets/signup.jpg';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ToastTypes, useToast} from "../../components/Toast";
import {authedRequest} from "../../http";

//SinIn/Sign should be re-written into a same component.
export default function SignUp() {

  const {show} = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return show(ToastTypes.WARNING, "Two passwords not same!");
    }

    try {
      const res = await authedRequest.post(`/api/users/register`, {
        username: name,
        email: email,
        password: password
      });

      show(ToastTypes.SUCCESS, "Register successfully! You need to confirm your email!");
      navigate('/confirm-email', {replace: true});
    } catch (err) {
      if (err.response.status) {
        navigate('/confirm-email');
      }
      show(ToastTypes.ERROR, err.response.data);
    }


  };

  return (
    <Container className={'pt-5'}>
      <Paper className={'mt-5'} elevation={4}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={SignUpIcon} width={'100%'}/>
          </Grid>
          <Grid className={'p-3'} item xs={12} lg={6}>
            <form onSubmit={handleRegister}>
              <Typography variant={'h4'} className={'mt-4'}>
                Create an account
              </Typography>
              <Box className={'mt-3'}>
                <TextField
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                  value={name}
                  onChange={handleNameChange}
                />
              </Box>
              <Box className={'mt-3'}>
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  type={'email'}
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
              <Box className={'mt-3'}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </Box>
              <Box className={'mt-3'} textAlign={'end'}>
                <Link to={''}>Forget Password?</Link>
              </Box>
              <Box className={'mt-4'}>
                <Button type={'submit'} variant="contained" color="primary" >
                  Create
                </Button>
              </Box>
              <Box className={'mt-5 pt-5 d-flex justify-content-center'}>
                <Typography variant={'subtitle1'} className={'me-2'}>
                  Already have an account?
                </Typography>
                <Link to={'/login'}>
                  Log In
                </Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}