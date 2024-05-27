import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Silent Patient',
    uv: 336,
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'Educated',
    uv: 334,
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'Where the Crawdads Sing',
    uv: 368,
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'Becoming',
    uv: 448,
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'The Great Gatsby',
    uv: 180,
    pv: 1000,
    amt: 1000,
  },
  {
    name: 'The Hobbit',
    uv: 310,
    pv: 1000,
    amt: 1000,
  },
 
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };



const PagesToRead = () => {
    return (
        <BarChart
          width={1200}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      );
};

export default PagesToRead;