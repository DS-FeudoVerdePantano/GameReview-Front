import './style.css';
import {useParams} from 'react-router-dom';
import AddLista from '../../Images/AddLista.svg'
import Navbar from '../../Components/NavBar';

function GamePage(props) {
    const {id}=useParams();

    return (
        <div>
            
            <Navbar />
        <div className='Top-Page'>
            <div className='Main-Content'>
                <div className='Game-Title'>
                    <h1>{id}</h1>
                </div>

                <div className='Game-Content'>
                    <div className='Game-Cover'>
                        <p>Capa<br/>do<br/>Jogo</p>
                    </div>
                    <div className='Game-Trailer'>
                        <p>Trailer do Jogo</p>
                    </div>
                    <div className='Game-Images'>
                        <div className='imageone'>
                            <p>Foto</p>
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
                    <p className='titulozo'>Sobre {id}</p>
                </div>

                <div className='Sec-Sinopse'>
                    <p className='Sec-Content-Title-Left'>Sinopse</p>
                    <p className='Sinopse-Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum scelerisque ligula, nec semper est malesuada id. Pellentesque non dictum odio, at fringilla quam. Donec fringilla iaculis eleifend. Integer sed commodo nisl, ut fringilla arcu. Pellentesque faucibus sodales dolor, et pharetra nulla mollis non. Nulla at luctus magna, vulputate dictum diam. Nulla in urna pellentesque, volutpat tellus at, aliquam elit. Suspendisse faucibus justo in risus varius, vel maximus metus malesuada. Nullam accumsan ipsum a placerat placerat. Mauris condimentum ante at tristique volutpat. Nam et aliquet ipsum. Morbi sed purus felis. Sed vel maximus nisl.</p>
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
                            <p className='RI-Left-Text'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit.</p>
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