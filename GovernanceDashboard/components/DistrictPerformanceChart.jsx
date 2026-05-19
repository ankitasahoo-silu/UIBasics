import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function DistrictPerformanceChart({ data }) {
  const labels = data.map(([name]) => name);
  const values = data.map(([, value]) => value);

  return (
    <Bar
      data={{ labels, datasets: [{ data: values, backgroundColor: '#7d7d7d', borderRadius: 3 }] }}
      options={{
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true, max: 80, ticks: { stepSize: 20 } } }
      }}
    />
  );
}

export default DistrictPerformanceChart;
