import 'animate.css';
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function App() {

  const [sobre, setSobre] = useState(false)
  const [nav, setNav] = useState(false)

  function abrirSobre() {
    if (sobre) {
      setSobre(false)
    } else {
      setSobre(true)
    }
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
                <IoMdClose className='animate__pulse animate__animated' color='white' onClick={abrirNav} size={40} />
              </div>
              <div className='nav-div'>
                <a href=""><p>Portfolio 2023</p></a>
                <a href=""><p>Primeiro Trimestre 2024</p></a>
                <a href=""><p>Segundo Trimestre 2024</p></a>
                <a href=""><p>Terceiro Trimestre 2024</p></a>
              </div>

            </>
          ) : (
            <>
              <div className='div-nav'>
                <IoIosMenu className='animate__pulse animate__animated' color='white' onClick={abrirNav} size={40} />
              </div>
            </>)}
        </nav>
      </header>
      <main>
        <section className='home'>
          <div>
            <h1 className='animate__animated animate__bounce'>Eduardo Borges</h1>
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
          <div>
            <button onClick={abrirSobre}>Um pouco mais sobre mim</button>
            {sobre ? (
              <>
                <div>
                  <p>
                    <strong>Expectativas e intenções quanto a sua formação geral e profissional;</strong>
                    <strong>ideias, motivações, opiniões acerca de experiências, vivências artístico culturais e no mundo do trabalho;</strong>
                    <strong>Reflexões críticas acerca de sua inserção, interação e participação na vida social, em geral. </strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, laudantium?
                    Quia ratione quo sint eius vel blanditiis, animi nulla delectus sed omnis alias
                    velit saepe a ullam? Enim, incidunt recusandae.</p>
                </div>
              </>
            ) : null}
          </div>
        </section>

      </main >
      <footer>
        <p className='foot'>
          Eduardo Borges &copy;
          <a href=""><FaGithub /></a>
          <a href=""><FaLinkedin color='blue' /></a>
        </p>

      </footer>
    </>
  )
}

export default App
