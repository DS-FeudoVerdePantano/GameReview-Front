import './style.css';
import brasao from './../../Images/brasaoleao.png';
import menu from './../../Images/Sanduiche.svg';
import perfil from './../../Images/Perfil.svg';

function Navbar(){
    return(
        <>
            <div className="tudaokrl">
                <div className="conteudo">
                    <div class="left-box">
                        <button type="menu"> <img src={menu} />
                        Menu</button>
                    </div>

                    <div className="brasao">
                        <a href="">
                            <img src={brasao} alt="logofeudo"/>
                        </a>
                    </div>

                    <div className="right-box">
                        <div class="rb-input">
                            <input type="text"  placeholder="Pesquisar.."  />
                        </div>

                        <div className="rb-perfil">
                            <a href="">
                                <img src={perfil} alt="logoperfil"/>
                            </a>
                        </div>

                        <div className="rb-button">
                            <button type="button">Login</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;