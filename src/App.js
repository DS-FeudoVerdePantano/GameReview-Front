//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Normilaze.css'
import Homepage from './Pages/homepage';
import Navbar from './Components/Navbar';
import Error from './Pages/Error/Error';
import capa from './Images/Capa the witcher 3.png';
import './Components/scrollbar/style.css';

function App() {
  return (
    <div className='main'>
      <Router>
          <Navbar />
        <Routes>
          <Route  path='/' element={<Homepage banner={capa} />} />
          <Route path='*' element={<Error /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
