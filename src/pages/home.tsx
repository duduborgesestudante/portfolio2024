import 'animate.css';
import '../App.css'
import { TypeAnimation } from 'react-type-animation';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Carousel } from '@trendyol-js/react-carousel';
import { GiCarpetBombing } from 'react-icons/gi';
import { PiMathOperationsFill } from 'react-icons/pi';
import { MdScience } from 'react-icons/md';
import { GrSystem } from 'react-icons/gr';
import { IoLanguage } from 'react-icons/io5';
import { BiNetworkChart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/header';

function Home() {
  const navigate = useNavigate()

  function irpara(pag: string) {
    navigate(pag)
  }

  return (
    <>
      <Header />
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
              <h2 className=''>Sobre <span>mim</span> </h2>
              <p className=''>
                Minhas expectativas quanto a minha formação é me formar ensino médio e concluir o curso técnico
                em desenvolvimento de sistemas do Senai. Quero seguir nessa carreira de WebDeveloper com React.
                Programar me motiva a crescer, gosto muito de escrever o codigo e aparecer na minha tela, acho que posso ser muito melhor do que eu sou atualmente
                sou muito novo e tenho um potencial muito grande de evolução.
                Minha interação social melhorou muito depois de vir pro senai, comecei a conviver com pessoas novas, de todos os estilos , acredito que isso tenha me ajudado muito a desenvolver minha capacidade de socialização e liderança</p>
            </div>

          </div>

          <div>
            <Carousel className='carrosselimg-group' show={2} draggable={true} swipeable={true} infinite={false} slide={2} swiping={true}>
              <div className='carrosselimg'>
                <div>

                  <GiCarpetBombing onClick={irpara("/humanas1")} size={30} />
                  <p>Humanas</p>

                </div>
              </div>

              <div className='carrosselimg'>
                <div>

                  <PiMathOperationsFill size={30} />
                  <p>Matematica</p>

                </div>
              </div>

              <div className='carrosselimg'>
                <div>

                  <MdScience size={30} />
                  <p>Natureza</p>

                </div>
              </div>

              <div className='carrosselimg'>

                <div>
                  <IoLanguage size={30} />
                  <p>Linguagens</p>
                </div>

              </div >

              <div className='carrosselimg'>
                <div>

                  <GiCarpetBombing size={30} />
                  <p>Desenvolvimento de sistemas</p>

                </div>
              </div >

              <div className='carrosselimg'>
                <div>

                  <BiNetworkChart size={30} />
                  <p>Modelagem de sistemas</p>

                </div>
              </div >

              <div className='carrosselimg'>

                <div>
                  <GrSystem size={30} />
                  <p>Implementação e manutenção de software</p>
                </div>

              </div >

            </Carousel >
          </div >
        </section >

      </main >

      <footer>
        <p className='foot '>
          <a target='_blank' href="https://github.com/duduborges"><FaGithub size={25} /></a>
          <a className='tex' >Eduardo Borges &copy;</a>
          <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/">< FaLinkedin size={25} color='blue' /></a>
        </p>

      </footer>
    </>
  )
}

export default Home
