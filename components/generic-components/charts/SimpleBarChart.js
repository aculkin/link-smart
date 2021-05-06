import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const SimpleBarChart = ({
  data,
  nameAttribute = 'x',
  dataAttribute = 'y',
  fillColor = '#8884d8',
}) => {
  console.log(data)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameAttribute} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataAttribute} fill={fillColor} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarChart
