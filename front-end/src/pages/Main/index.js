import {Grid, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from "./components/NavBar";
import {Outlet} from "react-router-dom";
export default function Main() {
  return (
    <div className={'container-fluid full-height p-0 bg-light'}>
      <Grid container className={'h-100'}>
        <Grid
          className={'d-flex flex-column align-items-center h-100 bg-light d-none d-lg-flex'}
          item md={2}>
          <h2 className={'mt-3'}>Logo</h2>
          <AccountCircleIcon className={'mt-4'} style={{fontSize: '60px'}}/>
          <Typography className={'mt-2'} variant={'h6'}>Johnathan Wong</Typography>
          <NavBar />
        </Grid>
        <Grid item xs={12} md={10} className={'p-3 bg-white'}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  )
}