
import './App.css';
import Home from './pages/home/Home';

import AwardedActor from "./AwardedActor."
import { BrowserRouter ,Route,Routes,} from 'react-router-dom';
import Layout from './layout';
function App() {
  return (
    
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='get-awarded-actor' element={<AwardedActor/>} />
        </Route>
    </Routes>
    
     </BrowserRouter>
    
  );
}

export default App;
