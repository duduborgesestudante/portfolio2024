import { useState } from 'react';
import {  IoIosMenu, IoMdClose, IoMdDownload } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)

  function togleNav() {
    setNav(true)
    setIsNavVisible(!isNavVisible)
  }
  function paginicial(){
    navigate("/")
  }

  function abrirNav() {
    if (nav) {
      setNav(false)
    } else {
      setNav(true)
    }
  }

    return(
        <header>

        <nav>

          {nav ? (
            <>



              <div className='close-nav'>
                <IoMdClose className='animate__pulse animate__animated open-nav' color='white' onClick={abrirNav} size={40} />
               <h2 onClick={paginicial}>Portfólio</h2> 
                <a href="curriculo.pdf" target="_blank" className='download'  >
                <IoMdDownload  color='white'   size={40} />
                </a>
                


              </div>
              <div className='nav-div animate__animated animate__slideInLeft animate__faster'>
                <a href="https://porfolio-segundo-ano.netlify.app/"><p>Portfolio 2023</p></a>
                <h3>Matérias por Trimestre</h3>
                <a href="/primeiro"><p>Primeiro Trimestre 2024</p></a>
                <a href=""><p>Segundo Trimestre 2024</p></a>
                <a href=""><p>Terceiro Trimestre 2024</p></a>
                <div className='nav-icons'>
                  <a target='_blank' href="https://github.com/duduborges"><FaGithub size={40} color='black' /></a> &nbsp;
                  <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><FaLinkedin size={40} color='blue' /></a>
                </div>
              </div>


            </>
          ) : (
            <>
              <div className='div-nav'>
                <IoIosMenu className='animate__pulse animate__animated open-nav' color='white' onClick={abrirNav} size={40} />
                <h2 onClick={paginicial}>Portfólio</h2>
                <a href="curriculo.pdf" target="_blank" className='download'  >
                <IoMdDownload  color='white'  size={40} />
                </a>
              </div>
            </>)}

        </nav>

      </header>
    )
}
export {Header}