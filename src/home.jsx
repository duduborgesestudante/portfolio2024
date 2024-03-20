import 'animate.css';
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import { Header } from './header';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {



  return (
    <>
      <Header/>
      <main>
        <section className='home'>
          <div className='home-title'>

            <img src="https://avatars.githubusercontent.com/u/84474594?v=4" className='minha-foto' alt="" />

            <h1 className='animate__animated animate__bounce'>Eduardo <span>Borges</span> </h1>
            <h3><TypeAnimation
              sequence={[
                'Aluno da Escola Sesi',
                1000,
                'Aluno do Senai',
                1000,

              ]}
              speed={50}
              style={{ fontSize: '2em' }}
            /></h3>
          </div>
          <div className='sobremim'>


            <div>
              <h2>Sobre <span>mim</span> </h2>
              <p>
                Minhas expectativas quanto a minha formação é eu me formar ensino médio e concluir o curso técnico
                em desenvolvimento de sistemas do Senai. Quero seguir nessa carreira de WebDeveloper com React.
                Programar me motiva a crescer, gosto muito de escrever o codigo e aparecer na minha tela, acho que posso ser muito melhor do que eu sou atualmente
                sou muito novo e tenho um potencial muito grande de evolução.
                Minha interação social melhorou muito depois de vir pro seai, comecei a conviver com muitas pessoas novas, de todos os estilos, acredito q isso tenha me ajudado muito a desenvolver minha capacidade de socialização e liderança</p>
            </div>

          </div>

        </section>

      </main >

      <footer>
        <p className='foot '>
          <a target='_blank' href="https://github.com/duduborges"><FaGithub size={25} /></a>
          <a >Eduardo Borges &copy;</a>
          <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/">< FaLinkedin size={25} color='blue' /></a>
        </p>

      </footer>
    </>
  )
}

export default Home
