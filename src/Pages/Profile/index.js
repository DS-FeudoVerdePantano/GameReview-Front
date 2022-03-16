import './style.css';
import BasicButton from '../../Components/basic button';
import logo from '../Profile/Maicu Neimah 1.png'
import BigInput from '../../Components/big input/index';

function ProfilePage() {
  return (
    <div className="Profile">
        <div className="Conf">
            <h1>Configurações</h1>
        </div>

        <div className="Conteudo"> 
            <div className="Foto">
              <ul className="caixote-esquerdo">
                  <li ><h3>Foto de Perfil</h3></li>
                  <li className="Fotenha" ><a href="#"><img src={logo} width="272px" /></a></li>
                  <li ><a href="#"><h2>Alterar a Senha</h2></a></li>
              </ul>
            </div>

            <div className="Entradas">
                <div className="inputs">
                  <div className="InputUsu">
                  <BigInput textudo="Alterar Usuário" />
                  </div>

                  <BigInput className="InputEma" textudo="Alterar Email" />
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