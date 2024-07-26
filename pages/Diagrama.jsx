import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './styles/styles.module.scss'; // Переконайтесь, що шлях правильний

export default function Diagrama({ data }) {
  if (!data) {
    return <div>No data available</div>;
  }

  const chartData = Object.entries(data).map(([student, percentage]) => ({
    student,
    percentage,
  }));

  return (
    <div className={styles.diagramContainer}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: chartData.map(d => d.student) }]}
        series={[{ data: chartData.map(d => d.percentage) }]}
        width={500}
        height={300}
      />
    </div>
  );
}