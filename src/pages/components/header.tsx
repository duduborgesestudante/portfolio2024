import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdOutlineContactPage } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';

function Header() {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)

  function togleNav() {
    setNav(true)
    setIsNavVisible(!isNavVisible)
  }
  function paginicial() {
    navigate("/")
  }

  function abrirNav() {
    if (nav) {
      setNav(false)
    } else {
      setNav(true)
    }
  }

  return (
    <header>

      <nav>

        {nav ? (
          <>



            <div className='close-nav'>
              <IoMdClose className='animate__pulse animate__animated open-nav' color='#F2EAE4' onClick={abrirNav} size={40} />
              <h2 onClick={paginicial}>Portfólio</h2>
              <a href="curriculo.pdf" target="_blank" className='download'  >
                <MdOutlineContactPage color='#F2EAE4' size={40} />
              </a>



            </div>
            <div className='nav-div animate__animated animate__slideInLeft animate__faster'>
              <div className='itens-nav'>
                <a href="https://porfolio-segundo-ano.netlify.app/"><p>Portfolio 2023</p></a>
                <h3>Portfolio por  Trimestre </h3>
                <a href="/"><p>Primeiro Trimestre 2024</p></a>
                <a href="/segundo"><p>Segundo Trimestre 2024</p></a>
                <a href="/teceiro"><p>Terceiro Trimestre 2024</p></a>
              </div>

              <div className='nav-icons'>
                <a target='_blank' href="https://github.com/duduborges"><FaGithub className='git' size={40} color='black' /></a> &nbsp;
                <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><FaLinkedin className='linkd' size={40} color='blue' /></a>
              </div>
            </div>


          </>
        ) : (
          <>
            <div className='div-nav'>
              <HiMenuAlt2 className='animate__pulse animate__animated open-nav' color='#F2EAE4' onClick={abrirNav} size={40} />
              <h2 onClick={paginicial}>Portfólio</h2>
              <a href="curriculo.pdf" target="_blank" className='download'  >
                <MdOutlineContactPage color='#F2EAE4' size={40} />
              </a>
            </div>
          </>)}

      </nav>

    </header>
  )
}
export { Header }