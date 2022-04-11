import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import brasao from './../../Images/brasaoleao.png';
import menu from './../../Images/Sanduiche.svg';
import perfil from './../../Images/Perfil.svg';
import './style.css';
import Results from './searchResults';

function Navbar(){

    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let comp = searchTerm.split(' ').join('-').toLowerCase()
    
        setGameResults([])
        fetch(`https://rawg.io/api/games?key=c08f80574bca406bbcf96b7e452b3e91?search=${comp}`)
        .then(res => res.json())
        .then(({results}) => {
            results === undefined ? alert('no games found') : setGameResults(results)
        })
        setSearchTerm("")
    }

    const redirect = useNavigate()

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
                        <form onSubmit={onSubmit}>
                            <input type="text" value={searchTerm} onChange={handleChange}/>
                            <br></br>
                            <input type="submit"/>
                        </form>
                            <Results gameResults={gameResults} />
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