import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import styles from './styles/styles.module.scss'; // Переконайтесь, що шлях правильний

export default function Diagrama({ data }) {
  const chartData = Object.entries(data).map(([student, percentage]) => ({
    student,
    percentage,
  }));

  const colors = [ '#4ade80' ]; 

  return (
    <div className={styles.diagramContainer}> {/* Додайте обгортку для центровання */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: chartData.map(d => d.student) }]}
        series={[{ 
          data: chartData.map(d => d.percentage),
          color: chartData.map((_, index) => colors[index % colors.length]) // Присвоєння кольорів
        }]}
        width={500}
        height={300}
      />
    </div>
  );
}
