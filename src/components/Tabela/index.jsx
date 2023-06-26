import Style from './Tabela.module.css'

const Tabela = ({imc}) => {

  return (
    <div className="container">
      <table className={Style.tabela}>
        <caption className={Style.tabela__titulo}>VEJA A INTERPRETAÇÃO DO IMC</caption>
        <thead>
          <tr>
            <th>IMC</th>
            <th>CLASSIFICAÇÃO	</th>
            <th>OBESIDADE (GRAU)</th>
          </tr>
        </thead>
        <tbody>
          <tr className={imc <= 18.5 & imc >= 1 ? Style.acerto : ''}>
            <td>MENOR QUE 18.5</td>
            <td>MAGREZA</td>
            <td>0</td>
          </tr>
          <tr className={imc > 18.5 & imc <= 24.9 ? Style.acerto : ''}>
            <td>ENTRE 18.5 E 24.9	</td>
            <td>NORMAL</td>
            <td>0</td>
          </tr>
          <tr className={imc > 25.0 & imc <= 29.9 ? Style.acerto : ''}>
            <td>ENTRE 25.0 E 29.9	</td>
            <td>SOBREPESO	</td>
            <td>I</td>
          </tr>
          <tr className={imc > 30.0 & imc < 39.9 ? Style.acerto : ''}>
            <td>ENTRE 30.0 E 39.9	</td>
            <td>OBESIDADE</td>
            <td>II</td>
          </tr>
          <tr className={imc > 40.0 ? Style.acerto : ''}>
            <td>MAIOR QUE 40.0	</td>
            <td>OBESIDADE GRAVE	</td>
            <td>III</td>
          </tr>
        </tbody>
      
      </table>
    </div>
  )
}

export default Tabela;