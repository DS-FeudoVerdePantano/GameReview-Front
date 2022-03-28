//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Normilaze.css'
import Homepage from './Pages/homepage';
import capa from './Assets/Capa the witcher 3.png';
import ProfilePage from './Pages/Profile'
import Login from './Pages/Login/index';
import { Error } from './Pages/Error';


function App() {


  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route  path='/' element={<Homepage banner={capa} />} />
          <Route  path='/profile' element={<ProfilePage />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
