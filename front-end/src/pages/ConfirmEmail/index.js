import {Button, Container, Typography} from "@mui/material";
import EmailIcon from '../../assets/email.jpg';

export default function ConfirmEmail() {
  return (
    <Container className={'d-flex flex-column align-items-center'}>
      <img src={EmailIcon} className={'mt-3'} width={'60%'}/>
      <Typography textAlign={'center'} variant={'h5'}>
        Confirm Your Email
      </Typography>
      <Typography className={'mt-4'} textAlign={'center'}>
        Your account has been successfully registered. To complete the process please check your email for a verification check
      </Typography>
      <Button className={'mt-4'} variant={'contained'}>
        Go to Email
      </Button>
    </Container>
  )
}