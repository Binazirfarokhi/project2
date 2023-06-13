import {Box, Grid} from "@mui/material";
import Trend from "./components/Trend";
import ItemsPieChart from "./components/ItemsPieChart";
import RealTimeRanking from "./components/RealTimeRanking";
import News from "./components/NewsList";

export default function Dashboard() {


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Box height={300}>
          <Trend />
        </Box>
        <Box className={'mt-3'}>
          <ItemsPieChart />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box height={300}>
          <RealTimeRanking />
        </Box>
        <Box className={'mt-3'}>
          <News />
        </Box>
      </Grid>
    </Grid>
  )
}