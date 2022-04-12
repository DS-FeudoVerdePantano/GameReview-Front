import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';
import brasao from './../../Images/brasaoleao.png';
import menu from './../../Images/Sanduiche.svg';
import perfil from './../../Images/Perfil.svg';
import './style.css';
import gameApi from '../../services/GameApi';

function Navbar(){

    let redirect = useNavigate()

    const [username, setUsername] = useState(null)
    const [search, setSearch] = useState(null)

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
    
          })
        }
    
        if (localStorage.getItem('user')) {
          let user_id = localStorage.getItem('user');
          handleUser(user_id);
        }
      },[])

      useEffect(() => {
        gameApi.get(`/games?key=c08f80574bca406bbcf96b7e452b3e91&search=${search}`)
        .then(res => {
            console.log(res)
        }).catch(error => {
            
        })
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
                            <input type="text"  placeholder="Pesquisar.."  onChange={(e) => setSearch(e.target.value)}/>
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