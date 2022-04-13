import './style.css';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import AddLista from '../../Images/AddLista.svg'
import Navbar from '../../Components/NavBar';
import gameApi from '../../services/GameApi';

function GamePage(props) {

    const {slug} = useParams();

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [developers, setDevelopers] = useState(null)
    const [platforms, setPlatforms] = useState(null)
    const [genres, setGenres] = useState(null)
    const [releaseDate, setReleaseDate] = useState(null)
    const [screenshots, setScreenshots] = useState(null)

    useEffect(() => {

        async function fetchGameInfo(id){
            // console.log(id)
            await gameApi.get(`/games/${id}?key=403d2c92ec8046dbb1a78e702f2e6ccb`)
                .then(res => {
                    console.log(res)
                    setPlatforms(res.data.platforms)
                    setGenres(res.data.genres)
                    setDevelopers(res.data.developers)
                    setDescription(res.data.description_raw)
                }).catch(error => {

                }
            )
        }

        async function fetchImages() {
            await gameApi.get(`/games?key=403d2c92ec8046dbb1a78e702f2e6ccb&search=${slug}&search_exact=true`)
                .then(res => {
                    let i = 0
                    while(res.data.results[i.toString()].slug !== slug) i += 1
                    console.log(res)
                    let id = res.data.results[i.toString()].id
                    setName(res.data.results[i.toString()].name)
                    setReleaseDate(res.data.results[i.toString()].released)
                    setScreenshots(res.data.results[i.toString()].short_screenshots)
                    fetchGameInfo(id)
                }).catch(error => {
                    console.log(error)
                }
            )
        }
        fetchImages()
    }, [])

    return (
        <div>
            
            <Navbar />
        <div className='Top-Page'>
            <div className='Main-Content'>
                <div className='Game-Title'>
                    <h1>{name}</h1>
                </div>

                <div className='Game-Content'>
                    <div className='Game-Trailer'>
                        {/* <p>Trailer do Jogo</p> */}
                        {screenshots ? <img src={screenshots[0].image} width="662.94px" height="417px"></img> : <img alt='loading'></img>}
                    </div>
                    <div className='Game-Images'>
                        <div className='imageone'>
                            {screenshots ? <img src={screenshots[1].image} width="300px" height="197px"/> : <img alt='loading'></img>}
                        </div>

                        <div className='imageone'>
                            {screenshots ? <img src={screenshots[2].image} width="300px" height="197px"/> : <img alt='loading'></img>}
                        </div>
                    </div>
                </div>

                <div className='Game-Score-List'>
                        <div className='Public-Score'>
                            <p>Avaliação do Público</p>
                            <p>X / 5</p>
                            <p className='littletextxx'>de xxx pessoas</p>
                        </div>

                        <div className='Add-To-List'>
                            <button type='button' className='Add-To-List-Button'><img src={AddLista} alt='top' />Adicionar<br/>à uma Lista</button>
                        </div>
                </div>
            </div>
        </div>

        <div className='Bottom-Page'>
            <div className='Sec-Content'>
                <div className='Sec-Title'>
                    <p className='titulozo'>Sobre {name}</p>
                </div>

                <div className='Sec-Sinopse'>
                    <p className='Sec-Content-Title-Left'>Sinopse</p>
                    <p className='Sinopse-Text'>{description}</p>
                </div>

                <div className='Sec-Rest-Info'>
                    <div className='Sec-Left-Text'>
                        <div className='Topzeira RI-Top-Left'>
                            <p className='Sec-Content-Title-Left'>Plataformas</p>
                            {platforms? platforms.map((platform, i) => <p className='RI-Left-Text' key={i}>{platform.platform.name}</p>) : <p></p>}
                        </div>

                        <div className='RI-Bottom-Left'>
                            <p className='Sec-Content-Title-Left'>Desenvolvedor</p>
                            {developers ? developers.map((developer, i) => <p className='RI-Left-Text' key={i}>{developer.name}</p>) : <p></p>}
                        </div>
                    </div>

                    <div className='Sec-Right-Text'>
                        <div className='Topzeira RI-Top-Right'>
                            <p className='Sec-Content-Title-Right'>Gênero</p>
                            {genres? genres.map((genre, i) => <p className='RI-Right-Text' key={i}>{genre.name}</p>) : <p></p>}
                        </div>

                        <div className='RI-Bottom-Right'>
                            <p className='Sec-Content-Title-Right'>Data de Lançamento</p>
                            <p className='RI-Right-Text'>{releaseDate}</p>
                        </div>
                    </div>
                </div>

                <div className='Comment-Section'>
                <div className='Sec-Title'>
                    <p className='titulozo'>Avaliações</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GamePage;