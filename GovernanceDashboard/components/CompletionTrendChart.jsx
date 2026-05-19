import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function CompletionTrendChart({ labels, series }) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          { label: 'Imphal', data: series.imphal, borderColor: '#3f6f6b', tension: 0.35 },
          { label: 'Thoubal', data: series.thoubal, borderColor: '#d87a11', tension: 0.35 },
          { label: 'Churachand', data: series.churachand, borderColor: '#5f647d', tension: 0.35 },
          { label: 'Ukhrul', data: series.ukhrul, borderColor: '#8c4a63', tension: 0.35 }
        ]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      }}
    />
  );
}

export default CompletionTrendChart;
