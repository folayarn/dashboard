import "./chart.css";
import { useState,useEffect } from "react";
import { ResponsiveContainer, LineChart, XAxis,Line} from "recharts";


function Chart() {
  const [data, setData]=useState([])
  const fetchData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1f7b33debmshcc5d333e9b8a80cp12e0ddjsn8e901ec4f4b7',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    fetch("https://imdb8.p.rapidapi.com/actors/get-awards?nconst=nm0001667", options)
      .then(response => {
        return response.json()
      })
      .then(date => {
        setData(date.resource.awards)
      })
   }
    useEffect(() => {
      fetchData()
    }, [])
    
  
 
  
  
  
  let username=data.map((u)=>(u.year))
   const count={}
 for (const element of username){

   if (count[element]){
     count[element]+=1;
   }
   else{
     count[element]=1
   }
 }

return (
    
    <div className="chart">
    

      <h3 className="chartitle">Year of Movies</h3>
      
          <ResponsiveContainer width="100%" aspect={4 /1} >
            <LineChart data=''>
              <XAxis dataKey=''  stroke="cyan"/>
              {/* <YAxis dataKey={user} stroke="blue"/> */}
              < Line type="monotone" dataKey="age" stroke="blue"/>

            </LineChart>
          </ResponsiveContainer>
         

          </div>
      
      
    
  );
}

export default Chart;
