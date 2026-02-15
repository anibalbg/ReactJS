import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', ventas: 2400 },
  { name: 'Mar', ventas: 1398 },
  { name: 'Mie', ventas: 9800 },
  { name: 'Jue', ventas: 3908 },
  { name: 'Vie', ventas: 4800 },
];

export const SalesChart = () => (
  <div style={{ width: '100%', height: 300, backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
    <h3>Ventas Semanales</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="ventas" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);