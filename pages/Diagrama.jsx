import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './styles/styles.module.scss'; // Переконайтесь, що шлях правильний

export default function Diagrama({ data }) {
  const chartData = Object.entries(data).map(([student, percentage]) => ({
    student,
    percentage,
  }));

  return (
    <div className={styles.diagramContainer}> {/* Додайте обгортку для центровання */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: chartData.map(d => d.student) }]}
        series={[{ data: chartData.map(d => d.percentage) }]}
        width={500}
        height={300}
      />
    </div>
  );
}