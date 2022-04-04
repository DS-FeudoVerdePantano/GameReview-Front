import React, {useState, useEffect} from 'react';
import GameApi from '../../services/GameApi';
import api from '../../services/api';
import banner from '../../Assets/Capa the witcher 3.png';
import Navbar from '../../Components/NavBar';
import './style.css';

function Homepage() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userTokenChecked, setUserTokenChecked] = useState(false)
  const [link, setLink] = useState('')
  const [zeldinha, setZeldinha] = useState('')

  useEffect(() => {
    
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

    async function handleUser(user_id){

      setUserTokenChecked(true);

      await api.get(`/auth/${user_id}`, config).then(res => {
        setLoggedIn(true);
        console.log('User is logged in');
      }).catch(error => {
        setLoggedIn(false);
      })
    }

    if (localStorage.getItem('user') && !userTokenChecked) {
      let user_id = localStorage.getItem('user');
      handleUser(user_id);
      setLoggedIn(true);
    }
  },[loggedIn, userTokenChecked])

  GameApi.get('/games?key=c08f80574bca406bbcf96b7e452b3e91&search=The Witcher 3')
                  .then(res => {
                    setLink(res.data.results['0'].background_image)
                  }).catch(error => {
                    console.log("error")
                  })
  GameApi.get('/games?key=c08f80574bca406bbcf96b7e452b3e91&metacritic&ordering=-metacritic&page_size=3')
                  .then(res => {
                    setZeldinha(res.data.results['0'].background_image)
                  }).catch(error => {
                    console.log("error")
                  })


  return (
    <div className="guizaotop">
      <Navbar />
      <div className="degrade">
      <div className="main">
        
        <main>
          <div className="banner-principal">
            <a href="#" ><img src={link} /></a>
          </div>
          
          
          <div className="HighLights">
            <h2>Melhores Avaliados</h2>
            <div className="melhores-avaliados">
              <ul className="sem-marcador inline">
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
              </ul>
            </div>

            <div className="lancamentos">
              <h2>Lançamentos</h2>
              <ul className="sem-marcador inline">
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
                <li className="banner-pequeno"><a href="#"><img src={zeldinha} /></a></li>
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

