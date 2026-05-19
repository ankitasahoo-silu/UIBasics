import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BudgetOverviewChart({ labels, sanctioned, utilised }) {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          { label: 'Sanctioned (Cr)', data: sanctioned, backgroundColor: '#3f6f6b', borderRadius: 4 },
          { label: 'Utilised (Cr)', data: utilised, backgroundColor: '#d87a11', borderRadius: 4 }
        ]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', align: 'start' } }
      }}
    />
  );
}

export default BudgetOverviewChart;
