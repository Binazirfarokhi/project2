import {Paper, Typography} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RealTimeRanking() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 200, 150, 50, 60, 80, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <Paper className={'p-3 rounded rounded-4 h-100'} elevation={3}>
      <Typography variant={'h6'}>
        Real-time Overall Price Ranking
      </Typography>
      <Bar height={'100%'} options={options} data={data} />
    </Paper>
  )
}