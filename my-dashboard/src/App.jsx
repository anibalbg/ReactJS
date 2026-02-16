import { useState, useEffect, useCallback } from 'react' // Añadimos useCallback
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  // 1. Envolvemos la generación en useCallback para que React esté tranquilo
  const generateDataEngine = useCallback(() => {
    const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    return dias.map(dia => ({
      name: dia,
      ventas: Math.floor(Math.random() * 8000) + 1000,
      visitas: Math.floor(Math.random() * 10000) + 2000,
    }));
  }, []);

  // 2. Ahora el useEffect es 100% "legal" para los estándares de React
  useEffect(() => {
    setData(generateDataEngine());
  }, [generateDataEngine]);

  const refreshDashboard = () => {
    setData(generateDataEngine());
  };

  const totalVentas = data.reduce((acc, curr) => acc + curr.ventas, 0);

  return (
    <div className="dashboard-container">
      <header>
        <h1>Data Engine Dashboard</h1>
        <p>Análisis reactivo de rendimiento</p>
      </header>
      
      <div className="stats-grid">
        <div className="card">
          <h3>Simulador de Ventas</h3>
          <p className="stat-number">{count}</p>
          <button onClick={() => setCount(count + 1)}>+1 Venta</button>
        </div>

        <div className="card">
          <h3>Revenue Total</h3>
          <p className="stat-number" style={{color: '#2ecc71'}}>
            ${totalVentas.toLocaleString()}
          </p>
          <button onClick={refreshDashboard}>🔄 Update Data</button>
        </div>
      </div>

      <div className="chart-container">
        <h3>Ventas vs Visitas</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
              <Legend />
              <Area type="monotone" dataKey="ventas" stroke="#646cff" fill="#646cff" fillOpacity={0.3} />
              <Area type="monotone" dataKey="visitas" stroke="#2ecc71" fill="#2ecc71" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. La Tabla de Datos (Como el View() de R) */}
      <div className="table-container" style={{ marginTop: '2rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#242424', borderRadius: '8px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444' }}>
              <th style={{ padding: '12px' }}>Día</th>
              <th>Ventas ($)</th>
              <th>Visitas</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '10px' }}>{row.name}</td>
                <td>{row.ventas}</td>
                <td>{row.visitas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App