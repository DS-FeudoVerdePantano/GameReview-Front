import './style.css';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import AddLista from '../../Images/AddLista.svg'
import Navbar from '../../Components/NavBar';
import gameApi from '../../services/GameApi';

function GamePage(props) {

    const {game_name} = useParams();

    const [id, setId] = useState(null)
    const [description, setDescription] = useState(null)
    const [developers, setDevelopers] = useState(null)
    const [platforms, setPlatforms] = useState(null)
    const [genres, setGenres] = useState(null)
    const [releaseDate, setReleaseDate] = useState(null)
    const [image, setImage] = useState('')
    const [screenshot, setScreenshot] = useState('')

    useEffect(() => {

        async function fetchGameInfo(id){
            await gameApi.get(`/games/${id}?key=c08f80574bca406bbcf96b7e452b3e91`)
                .then(res => {
                    console.log(res)
                    setDevelopers(res.data.developers)
                    setDescription(res.data.description_raw)
                }).catch(error => {

                }
            )
        }

        async function fetchImages() {
            await gameApi.get('/games?key=c08f80574bca406bbcf96b7e452b3e91&search=the-witcher-3-wild-hunt&search_exact=true')
                .then(res => {
                    console.log(res)
                    let id = res.data.results['0'].id
                    setImage(res.data.results['0'].background_image)
                    setImage(res.data.results['0'].background_image)
                    setScreenshot(res.data.results['0'].short_screenshots['1'].image)
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
                    <h1>{game_name}</h1>
                </div>

                <div className='Game-Content'>
                    <div className='Game-Cover'>
                        <img src={image}></img>
                    </div>
                    <div className='Game-Trailer'>
                        <p>Trailer do Jogo</p>
                    </div>
                    <div className='Game-Images'>
                        <div className='imageone'>
                            <img src={screenshot} />
                        </div>

                        <div className='imageone'>
                            <p>Foto</p>
                        </div>

                        <div className='moreimages'>
                            <p>Ver</p>
                            <p>+ fotos</p>
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
                    <p className='titulozo'>Sobre {game_name}</p>
                </div>

                <div className='Sec-Sinopse'>
                    <p className='Sec-Content-Title-Left'>Sinopse</p>
                    <p className='Sinopse-Text'>{description}</p>
                </div>

                <div className='Sec-Rest-Info'>
                    <div className='Sec-Left-Text'>
                        <div className='Topzeira RI-Top-Left'>
                            <p className='Sec-Content-Title-Left'>Plataformas</p>
                            <p className='RI-Left-Text'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit.</p>
                        </div>

                        <div className='RI-Bottom-Left'>
                            <p className='Sec-Content-Title-Left'>Desenvolvedor</p>
                            {/* {developers.map((developer, i) => <p className='RI-Left-Text' key={i}>{developer}</p>)} */}
                            <p className='RI-Left-Text'>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>

                    <div className='Sec-Right-Text'>
                        <div className='Topzeira RI-Top-Right'>
                            <p className='Sec-Content-Title-Right'>Gênero</p>
                            <p className='RI-Right-Text'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit.</p>
                        </div>

                        <div className='RI-Bottom-Right'>
                            <p className='Sec-Content-Title-Right'>Data de Lançamento</p>
                            <p className='RI-Right-Text'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit.</p>
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