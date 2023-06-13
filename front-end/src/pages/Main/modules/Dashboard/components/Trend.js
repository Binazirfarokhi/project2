import {Box, Grid, Paper, Typography} from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Trend() {

  return (
    <Paper className={'w-100 rounded rounded-4 overflow-hidden h-100 d-flex flex-column justify-content-between'} elevation={4}>
      <Grid className={'p-3'} container spacing={2}>
        <Grid item xs={6} lg={4}>
          <Typography variant={'h6'}>Today</Typography>
          <Typography className={'text-info'} variant={'h3'}>9</Typography>
          <Typography variant={'subtitle2'}>
            items on watching list
          </Typography>
        </Grid>

        <Grid item container xs={6} spacing={2} lg={8}>
          <Grid item xs={12} lg={6}>
            <Box className={'d-flex align-items-center text-danger'}>
              <NorthIcon className={'me-2'}/>
              <Typography variant={'subtitle1'}>
                Price increase
              </Typography>
            </Box>
            <Typography className={'ms-5 text-danger'} variant={'h5'}>5</Typography>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box className={'d-flex align-items-center text-success'}>
              <SouthIcon className={'me-2'}/>
              <Typography variant={'subtitle1'}>
                Price decrease
              </Typography>
            </Box>
            <Typography className={'ms-5 text-success'} variant={'h5'}>
              4
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box role={'button'} className={'bg-secondary d-flex align-items-center justify-content-end'} height={50}>

        <Typography className={'text-white'} variant={'subtitle1'}>
          View Your watching List

        </Typography>
        <KeyboardArrowRightIcon className={'text-white me-3 ms-2'}/>
      </Box>
    </Paper>
  )
}