import React from "react";

function Navbar(){
    return(
        <>
            <header>
                <div className="conteudo">
                    <div class="left-box">
                        <button type="menu">Menu</button>
                    </div>

                    <div className="brasao">

                    </div>

                    <div className="right-box">
                        <div class="rb-input">
                            <input type="text"  placeholder="Pesquisar.."  />
                        </div>

                        <div className="rb-perfil">
                            
                        </div>

                        <div className="rb-button">
                            <button type="button">Login</button>
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    );
}

export default Navbar;