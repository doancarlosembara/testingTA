<template>
    <div>
      <h2>Attendance Overview</h2>
      <LineChart :data="lineChartData" :options="chartOptions"/>
      <BarChart :data="barChartData" :options="chartOptions"/>
      <PieChart :data="pieChartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script setup>
  import { Line, Bar, Pie } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Filler);
  
  const props = defineProps({
    employee_stats: Object,
  });
  
  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Attendance',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [
          props.employee_stats.week1Attendance,
          props.employee_stats.week2Attendance,
          props.employee_stats.week3Attendance,
          props.employee_stats.week4Attendance,
        ],
      },
    ],
  };
  
  const barChartData = {
    labels: ['Work Days', 'Weekends', 'Holidays'],
    datasets: [
      {
        label: 'Days',
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
        data: [
          props.employee_stats.attendableThisMonth,
          props.employee_stats.weekendsThisMonth,
          props.employee_stats.holidaysThisMonth,
        ],
      },
    ],
  };
  
  const pieChartData = {
    labels: ['Attended', 'Absented'],
    datasets: [
      {
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        data: [props.employee_stats.totalAttendanceSoFar, props.employee_stats.totalAbsenceSoFar],
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  </script>
  