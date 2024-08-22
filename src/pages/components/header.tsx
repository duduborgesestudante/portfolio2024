import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineContactPage } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import curriculo from "../../../curriculo.pdf"
function Header() {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const location = useLocation();
  const isRouteActive = (path: any) => location.pathname === path;
  const irPara = useNavigate();
  const segundo = () => {
    irPara("/segundo")
  }
  const terceiro = () => {
    irPara("/terceiro")
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

      <nav className='nav-mobile'>

        {nav ? (
          <>
            <div className='close-nav'>
              <IoMdClose className='animate__pulse animate__animated open-nav' color='#F2EAE4' onClick={abrirNav} size={40} />
              <h2 onClick={paginicial}>Portfólio</h2>
              <a href={curriculo} target="_blank" className='download'  >
                <MdOutlineContactPage color='#F2EAE4' size={40} />
              </a>



            </div>
            <div className='nav-div animate__animated animate__slideInLeft animate__faster'>
              <div className='itens-nav'>
                <a href="https://porfolio-segundo-ano.netlify.app/"><p>Portfolio 2023</p></a>
                <h3>Portfolio por  Trimestre </h3>
                <a href="/"><p style={{ color: isRouteActive('/') ? 'gray' : 'white' }}>Primeiro Trimestre 2024</p></a>
                <a><p style={{ color: isRouteActive('/segundo') ? 'gray' : 'white' }} onClick={segundo}>Segundo Trimestre 2024</p></a>
                <a><p style={{ color: isRouteActive('/terceiro') ? 'gray' : 'white' }} onClick={terceiro}>Terceiro Trimestre 2024</p></a>
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
              <a href={curriculo} target="_blank" className='download'  >
                <MdOutlineContactPage color='#F2EAE4' size={40} />
              </a>
            </div>
          </>)}

      </nav>
      <nav className='web-nav'>
        <div className='div-nav'>
          <div>
            <a href="https://porfolio-segundo-ano.netlify.app/"><h2>Portfolio 2023</h2></a>
            <a href="/" ><h2 style={{ color: isRouteActive('/') ? 'gray' : 'white' }}>Primeiro Trimestre 2024</h2></a>
            <h2 style={{ color: isRouteActive('/segundo') ? 'gray' : 'white' }} onClick={segundo}>(Segundo Trimestre 2024)</h2>
            <h2 style={{ color: isRouteActive('/trimestre') ? 'gray' : 'white' }} onClick={terceiro}>Terceiro Trimestre 2024</h2>
          </div>
          {/* <div>
            <h2 id='title' onClick={paginicial}>Portfólio</h2>
          </div> */}
          <a href={curriculo} download="curriculo.pdf" target="_blank" className='download'>
            <div className='curriculo-div'>
              <h2>Currículo ➡</h2>
              <MdOutlineContactPage color='#F2EAE4' size={40} />
            </div>
          </a>
        </div>
      </nav>
    </header >
  )
}
export { Header }