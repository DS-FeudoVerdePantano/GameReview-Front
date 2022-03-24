import './style.css';
import BasicButton from '../../Components/basic button';
import logo from './../../Assets/Maicu Neimah 1.png';
import BasicInput from '../../Components/basic input';
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
                  <BasicInput textudo="Alterar Usuário" />
                  </div>

                  <BasicInput className="InputEma" textudo="Alterar Email" />
                </div>
                <div className="Botao">
                    <BasicButton className="salvar" width="314px"  type="submit" title="Salvar Alterações" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfilePage;