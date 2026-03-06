import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
 {name:"Jan", sales:400},
 {name:"Feb", sales:300},
 {name:"Mar", sales:500},
];

function SalesChart(){
 return(
  <LineChart width={400} height={200} data={data}>
   <XAxis dataKey="name"/>
   <YAxis/>
   <Tooltip/>
   <Line type="monotone" dataKey="sales" stroke="#8884d8"/>
  </LineChart>
 );
}

export default SalesChart;