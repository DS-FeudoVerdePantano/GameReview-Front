import React, {useEffect} from 'react';
import api from '../../services/api';
import banner from '../../Assets/Capa the witcher 3.png';
import Navbar from '../../Components/NavBar';
import './style.css';

function Homepage() {

  return (
    <div className="guizaotop">
      <Navbar />
      <div className="degrade">
      <div className="main">
        
        <main>
          <div className="banner-principal">
            <a href="#" ><img src={banner} /></a>
          </div>
          
          
          <div className="HighLights">
            <h2>Melhores Avaliados</h2>
            <div className="melhores-avaliados">
              <ul className="sem-marcador inline">
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
              </ul>
            </div>

            <div className="lancamentos">
              <h2>Lançamentos</h2>
              <ul className="sem-marcador inline">
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={banner} /></a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default Homepage;

