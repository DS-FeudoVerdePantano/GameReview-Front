import './style.css';
import Navbar from '../../Components/NavBar';
import brasao from '../../Images/brasaoleao.png'
import BasicInput from '../../Components/basic input';
import BasicButton from '../../Components/basic button';

function Login() {
  return (
    <div className="Tudo">
      <div className="CaixaLogin">
        <h1 className="tituloLogin">Login</h1>
        <form>
          <BasicInput textudo={"Email"} />
          <BasicInput textudo={"Senha"} />
          <BasicButton type={"button"} title={"Entrar"} />
        </form>
        <a href="">
        <h2 className="Cadastro">Cadastre-se aqui</h2>
        </a>

      </div>

      <div className="Brasao">
        <img  className="capiv" src={brasao} />
      </div>
    </div>
  );
}

export default Login;