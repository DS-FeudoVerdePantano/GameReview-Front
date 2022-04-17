import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';
import gameApi from '../../services/GameApi';
import brasao from './../../Images/brasaoleao.png';
import menu from './../../Images/Sanduiche.svg';
import perfil from './../../Images/Perfil.svg';
import './style.css';

function Navbar(){

    const redirect = useNavigate()

    const [username, setUsername] = useState(null)
    const [search, setSearch] = useState(null)
    const [slug, setSlug] = useState(null)

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function sleep(time){
      await delay(time)
    }

    useEffect(() => {
    
        const config = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        };
    
        async function handleUser(user_id){
    
          await api.get(`/auth/${user_id}`, config).then(res => {
            console.log('User is logged in');
            setUsername(localStorage.getItem('name'));
          }).catch(error => {
            console.log('User not logged in')
          })
        }
    
        if (localStorage.getItem('user')) {
          let user_id = localStorage.getItem('user');
          handleUser(user_id);
        }
      },[])

      useEffect(() => {
        async function getGames(){
            await gameApi.get(`/games?key=403d2c92ec8046dbb1a78e702f2e6ccb&search=${search}&search_exact=true&ordering=-metacritic`) //&page_size=6
            .then(res => {
              console.log(res.data)
              setSlug(res.data.results['0'].slug)
            }).catch(error => {
                
            })
        }
        if(search) getGames()
      }, [search])

    return(
        <>
            <div className="tudaokrl">
                <div className="conteudo">
                    <div className="left-box">
                        <button type="menu"> <img src={menu} />Menu</button>
                    </div>

                    <div className="brasao">
                        <a href="" onClick={() => {redirect('/')}}>
                            <img src={brasao} alt="logofeudo"/>
                        </a>
                    </div>

                    <div className="right-box">
                        <div className="rb-input">
                            <input type="text"  placeholder="Pesquisar.."  onChange={(e) => setSearch(e.target.value)} onKeyPress={e => {if(e.key === 'Enter') {
                              sleep(6000)
                              redirect(`/game/${slug}`)
                              window.location.reload();
                              }}}
                            />
                        </div>

                        <div className="rb-perfil">
                            <a href="">
                                <img src={perfil} alt="logoperfil"/>
                            </a>
                        </div>

                        <div className="rb-button">
                            <button type="button" onClick={() => {redirect('/login')}} >{username ? username : 'Login'}</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;