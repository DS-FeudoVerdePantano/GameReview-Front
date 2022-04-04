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
        </div>
    );
}

export default GamePage;