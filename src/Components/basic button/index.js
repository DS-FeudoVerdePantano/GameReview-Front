import './style.css';

function BasicButton({ type, title}) {
  return (
    <div >
        <button className="botao" type={type} > {title}</button>
    </div>
  );
}

export default BasicButton;