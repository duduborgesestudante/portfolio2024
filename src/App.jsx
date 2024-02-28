import 'animate.css';
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function App() {

 
  const [nav, setNav] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)
 
  function togleNav(){
    setNav(true)
    setIsNavVisible(!isNavVisible)
  }


  function abrirNav() {
    if (nav) {
      setNav(false)
    } else {
      setNav(true)
    }
  }


  return (
    <>
      <header>
     
        <nav>

          {nav ? (
            <>



              <div className='close-nav'>
                <IoMdClose className='animate__pulse animate__animated open-nav' color='white' onClick={abrirNav} size={40} />
                <h2>Portfólio</h2>

              </div>
              <div className='nav-div animate__animated animate__slideInLeft animate__faster'>
                <a href="https://porfolio-segundo-ano.netlify.app/"><p>Portfolio 2023</p></a>
                <a href="/"><p>Primeiro Trimestre 2024</p></a>
                <a href=""><p>Segundo Trimestre 2024</p></a>
                <a href=""><p>Terceiro Trimestre 2024</p></a>
                <div className='nav-icons'>
                    <a target='_blank' className='github'  href="https://github.com/duduborges"><FaGithub size={40} color='black'  /></a> &nbsp;
                     <a target='_blank'  href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><FaLinkedin   size={40} color='blue' /></a>
                </div>
              </div>
              

            </>
          ) : (
            <>
              <div className='div-nav'>
                <IoIosMenu className='animate__pulse animate__animated open-nav' color='white' onClick={abrirNav} size={40} />
                <h2>Portfólio</h2>
              </div>
            </>)}

        </nav>
        
      </header>
      <main>
        <section className='home'>
          <div>
            <figure>
            <img src="https://avatars.githubusercontent.com/u/84474594?v=4" className='minha-foto' alt="" />
            </figure>
            <h1 className='animate__animated animate__bounce'>Eduardo <span>Borges</span> </h1>
            <h3><TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
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
                    sou muito novo e tenho um potencial muito grande de evolução
                    <strong>Reflexões críticas acerca de sua inserção, interação e participação na vida social, em geral. </strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, laudantium?
                    Quia ratione quo sint eius vel blanditiis, animi nulla delectus sed omnis alias
                    velit saepe a ullam? Enim, incidunt recusandae.</p>
                </div>
            
          </div>
        </section>

      </main >
      <footer>
        <p className='foot'>
          Eduardo Borges &copy;&nbsp;
          <a target='_blank' href="https://github.com/duduborges"><FaGithub /></a> &nbsp;
          <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><FaLinkedin color='blue' /></a>
        </p>

      </footer>
    </>
  )
}

export default App
