import { useState } from "react";

export default function Practice() {
  const [email, setEmail] = useState(["email1","gmail"]);
const[password,setPassword]=useState("")
const [toggle,setToggle]=useState("Hammed roK")
const [{count1,count2}, setCount]=useState({count1:10,count2:20})
  return (
    <div

      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
            


     <button onClick={()=>setToggle((c)=>"Olugbenga")}>+</button>
      <div>
        
        <input
          style={{ width: "100px" }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email}
      </div> 
      <div>
        
        <input
          style={{ width: "100px" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password}
      </div>
      

    </div>
  );
}
