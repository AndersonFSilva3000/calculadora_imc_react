import { useState } from 'react';

import style from './Formulario.module.css';
import Tabela from '../Tabela/index'


const Formulario = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [totalImc, setTotalImc] = useState('');

  function handleClick(e) {
    e.preventDefault();
    const imc = (peso / (Math.pow(altura, 2))).toFixed(1);
    setTotalImc(imc);
  }

  return (
    <div className="container">
      <form className={style.formulario}>
        <label htmlFor='altura'>Altura:</label>
        <input type="number" max={2.9} min={0.1} id='altura' onChange={ e => setAltura(parseFloat(e.target.value))}/>
        <label htmlFor='peso'>Peso:</label>
        <input type="number" id='peso' onChange={e => setPeso(parseFloat(e.target.value))}/>
        <button className={style.botao} onClick={handleClick}>Calcular</button>
      </form>
      <div className={style.containerResultado}>
        <span>Seu IMC:</span>
        <span className={style.resultado}>{ totalImc }</span>
      </div>
      <Tabela imc={totalImc} />;
    </div>
  )
}

export default Formulario;