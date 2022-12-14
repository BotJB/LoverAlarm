import Home from './components/Home'
import Dashboard from './components/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Onboarding from './components/Onboarding';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/onboarding" element={<Onboarding />} />

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
