import "./featuredinfo.css";
import { ResponsiveContainer, BarChart, XAxis,Bar,YAxis} from "recharts";

function FeaturedInfo() {
 
  return (
    <div className="featured">
     
      <ResponsiveContainer width="70%" aspect={2 /1} >
            <BarChart data="">
              <XAxis dataKey="names" stroke="green"/>
              <YAxis dataKey="age" stroke="green"/>
              < Bar type="monotone" dataKey="age" stroke="red"/>

            </BarChart>
          </ResponsiveContainer>
  
    </div>
  );
}

export default FeaturedInfo;
