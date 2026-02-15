import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css'

// Datos de ejemplo para tu dashboard
const data = [
  { name: 'Lun', ventas: 2400 },
  { name: 'Mar', ventas: 1398 },
  { name: 'Mie', ventas: 9800 },
  { name: 'Jue', ventas: 3908 },
  { name: 'Vie', ventas: 4800 },
  { name: 'Sab', ventas: 3800 },
  { name: 'Dom', ventas: 4300 },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard-container">
      <h1>Dashboard de Ventas</h1>
      
      {/* Sección de Tarjetas de Resumen */}
      <div className="stats-grid">
        <div className="card">
          <h3>Total de Clics</h3>
          <p className="stat-number">{count}</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Simular Venta (+1)
          </button>
        </div>
      </div>

      {/* Sección del Gráfico */}
      <div className="chart-container">
        <h3>Rendimiento Semanal</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="ventas" stroke="#646cff" fill="#646cff" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default App