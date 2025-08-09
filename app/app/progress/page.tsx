
'use client'
import { Line } from 'react-chartjs-2'
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js'
Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip)

export default function Progress() {
  const data = {
    labels: ['Mon','Wed','Fri','Mon'],
    datasets: [
      { label: 'Box Squat (kg)', data: [20,22.5,22.5,23], tension: 0.3 },
      { label: 'Sleep (1-5)', data: [4,3,4,5], yAxisID: 'y1', tension:0.3 }
    ]
  }
  const options:any = {
    scales: { y: { beginAtZero:true }, y1: { position:'right', beginAtZero:true } }
  }
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Progress</h1>
      <div className="card">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
