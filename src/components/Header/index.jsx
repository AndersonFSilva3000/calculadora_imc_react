import style from './Header.module.css'

const Header = () => {
  return (
  <> 
    <div className="container">
      <header>
        <h1 className={style.titulo}>Cálculo IMC</h1>
        <p>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
        </p>
        <p>
          O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
        </p>
        <p>
          Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
        </p>
      </header>
    </div>
  </> 
  )
} 

export default Header;