import style from './Header.module.css'

const Header = () => {
  return (
  <> 
    <picture>
      <source media="(max-width: 639px)" srcSet='../public/image/banner-tratamento-obesidade-480x380.jpg'></source>
      <source media="(min-width: 640px) and (max-width: 768px)"  srcSet="../public/image/banner-tratamento-obesidade-768x240.jpg"></source>
      <img src='../public/image/banner-tratamento-obesidade-1600x380.jpg'></img>
    </picture>
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