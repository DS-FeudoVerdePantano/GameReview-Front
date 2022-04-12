import { useNavigate } from 'react-router-dom'
import brasao from './../../Images/brasaoleao.png';
import perfil from './../../Images/Perfil.svg';
import ButtonMenu from '../Dropdown Menu';

import './style.css';


function Navbar(){

    let redirect = useNavigate()

    return(
        <>
            <div className="tudaokrl">
                <div className="conteudo">
                    <div className="left-box">
                        
                        <ButtonMenu  />
                        
                    </div>

                    <div className="brasao">
                        <a href="" onClick={() => {redirect('/')}  }>
                            <img src={brasao} alt="logofeudo"/>
                        </a>
                    </div>

                    <div className="right-box">
                        <div className="rb-input">
                            <input type="text"  placeholder="Pesquisar.."  />
                        </div>

                        <div className="rb-perfil">
                            <a href="">
                                <img src={perfil} alt="logoperfil"/>
                            </a>
                        </div>

                        <div className="rb-button">
                            <button type="button" onClick={() => {redirect('/login')}} >Login</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;