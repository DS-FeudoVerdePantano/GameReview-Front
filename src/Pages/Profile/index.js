import './style.css';
import BasicButton from '../../Components/basic button';
import logo from './logo192.png'
function ProfilePage() {
  return (
    <div className="Profile">
        <div className="Conf">
            <h1>Configurações</h1>
        </div>

        <div className="Conteudo"> 
            <div className="Foto">
            <ul class="sem-marcador inline">
                <li ><h3>Foto de Perfil</h3></li>
                <li ><a href="#"><img src={logo} /></a></li>
                <li ><a href="#"></a></li>
              </ul>
            </div>

            <div className="Entradas">
                <div className="inputs">
                    
                </div>
                <div className="Botao">
                    <BasicButton type="submit" title="Salvar Alterações" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfilePage;