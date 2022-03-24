import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Normilaze.css'
import Homepage from './Pages/homepage';
import capa from './Assets/Capa the witcher 3.png';
import ProfilePage from './Pages/Profile';
import './Components/scrollbar/style.css';


function App() {


  return (

    <div className='main'>
      <Router>
          
        <Routes>
          <Route  path='/' element={<Homepage banner={capa} />} />
          <Route  path='/Profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
