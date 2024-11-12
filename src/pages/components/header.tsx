import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineContactPage } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import curriculo from "../../../curriculo.pdf"
import { DialogClose, DialogDescription } from '@radix-ui/react-dialog';
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
  function Ppe() {
    navigate("/ppe")
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
                <a><p style={{ color: isRouteActive('/terceiro') ? 'gray' : 'white' }} onClick={Ppe}>PPE 2024</p></a>

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
          <div className='font-bold'>
            <a href="https://porfolio-segundo-ano.netlify.app/"><h2>Portfolio 2023</h2></a>
            <a href="/" ><h2 style={{ color: isRouteActive('/') ? 'white' : 'gray' , textDecoration: isRouteActive('/') ? 'underline' : 'none' }}>Primeiro Trimestre 2024</h2></a>
            <h2 style={{ color: isRouteActive('/segundo') ? 'white' : 'gray' , textDecoration: isRouteActive('/segundo') ? 'underline' : 'none' }} onClick={segundo}>Segundo Trimestre 2024</h2>
            <h2 style={{ color: isRouteActive('/terceiro') ? 'white' : 'gray' , textDecoration: isRouteActive('/terceiro') ? 'underline' : 'none' }} onClick={terceiro}>Terceiro Trimestre 2024</h2>
            <h2 style={{ color: isRouteActive('/ppe') ? 'white' : 'gray' , textDecoration: isRouteActive('/ppe') ? 'underline' : 'none' }} onClick={Ppe}>PPE</h2>
          </div>
          <Dialog>
            <DialogTrigger className='flex mr-3'>
              <h2>Currículo ➡</h2>
              <MdOutlineContactPage color='#F2EAE4' size={40} />
            </DialogTrigger>
            <DialogContent className='bg-[#730202] border-[#670900] border-[8px] rounded-2xl h-[200px] w-fit px-10 flex justify-between items-baseline flex-col'>
              <DialogHeader>
                <DialogTitle className='text-white text-center text-3xl'>Tem certeza que deseja baixar meu curriculo?</DialogTitle>
                <DialogDescription className='flex justify-around pt-8 items-end'>
                  <a href={curriculo} download="curriculo.pdf" target="_blank" className='bg-[#F2EAE4] px-8 py-2 rounded-[8px]'><DialogClose>Sim</DialogClose></a>
                  <DialogClose className='bg-[#F2EAE4] px-8 p-2 rounded-[8px]'>Não</DialogClose>

                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </nav>
    </header >
  )
}
export { Header }