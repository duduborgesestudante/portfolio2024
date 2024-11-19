import 'animate.css';
import '../../App.css'
import { TypeAnimation } from 'react-type-animation';
import { Header } from './header';
import { Carousel } from '@trendyol-js/react-carousel';
import { GiCarpetBombing } from 'react-icons/gi';
import { PiMathOperationsFill } from 'react-icons/pi';
import { MdScience } from 'react-icons/md';
import { GrSystem, GrTestDesktop } from 'react-icons/gr';
import { IoLanguage } from 'react-icons/io5';
import { BiNetworkChart } from 'react-icons/bi';
import { GoFileCode } from 'react-icons/go';
import { Footer } from './footer';
import { useNavigate } from 'react-router-dom';
import { SlNotebook } from 'react-icons/sl';
import { FaDatabase } from 'react-icons/fa';

function Home3() {

    const irPara = useNavigate();
    const natureza3 = () => {
        irPara("/natureza3")
    }
    const linguagens3 = () => {
        irPara("/linguagens3")
    }
    const matematica3 = () => {
        irPara("/matematica3")
    }
    const humanas3 = () => {
        irPara("/humanas3")
    }
    const desi3 = () => {
        irPara("/desi3")
    }
    const modelagem3 = () => {
        irPara("/modelagem3")
    }
    const manutencao3 = () => {
        irPara("/manutencao3")
    }
    const db3 = () => {
        irPara("/db3")
    }
    const testes3 = () => {
        irPara("/testes3")
    }


    return (
        <>
            <Header />
            <main>
                <section className='home'>
                    <div className='mobile'>

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
                    </div>
                    <div className='web'>
                        <div className='home-title-web'>
                            <div className='sobre-web'>
                                <h1 className='animate__animated animate__bounce'>Eduardo <span>Borges</span> </h1>


                                <h2 className=''>Sobre <span>mim</span> </h2>
                                <p className=''>
                                    Minhas expectativas quanto a minha formação é me formar ensino médio e concluir o curso técnico
                                    em desenvolvimento de sistemas do Senai. Quero seguir nessa carreira de WebDeveloper com React.
                                    Programar me motiva a crescer, gosto muito de escrever o codigo e aparecer na minha tela, acho que posso ser muito melhor do que eu sou atualmente
                                    sou muito novo e tenho um potencial muito grande de evolução.
                                    Minha interação social melhorou muito depois de vir pro senai, comecei a conviver com pessoas novas, de todos os estilos , acredito que isso tenha me ajudado muito a desenvolver minha capacidade de socialização e liderança</p>

                            </div>
                            <div className='img-sobre'>
                                <img src="https://avatars.githubusercontent.com/u/84474594?v=4" className='minha-foto' alt="" />

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

                        </div>
                    </div>

                    <div>
                        <p className='title-materia'>Atividades por <span>matéria</span></p>
                        <p className='little-materia'>(CLIQUE NA CAIXA PARA IR PARA A PÁGINA DE ATIVIDADES)</p>
                    </div>
                    <div className='carrosel'>

                        <Carousel className='carrosselimg-group' show={2.03} infinite={false} slide={2.01} swiping={true}>

                            <div onClick={humanas3} className='carrosselimg'>
                                <div>
                                    <GiCarpetBombing color='orange' size={30} />
                                    <p>Humanas</p>
                                </div>
                            </div>


                            <div onClick={matematica3} className='carrosselimg'>
                                <div>

                                    <PiMathOperationsFill color='blue' size={30} />
                                    <p>Matematica</p>

                                </div>
                            </div>


                            <div onClick={natureza3} className='carrosselimg'>
                                <div>

                                    <MdScience color='lime' size={30} />
                                    <p>Natureza</p>

                                </div>
                            </div>


                            <div onClick={linguagens3} className='carrosselimg'>
                                <div>
                                    <IoLanguage color='red' size={30} />
                                    <p>Linguagens</p>
                                </div>
                            </div >



                            <div onClick={desi3} className='carrosselimg'>
                                <div>

                                    <GoFileCode color='darkblue' size={30} />
                                    <p>Desenvolvimento de sistemas</p>

                                </div>
                            </div >



                            <div onClick={modelagem3} className='carrosselimg'>
                                <div>
                                    <BiNetworkChart color='cyan' size={30} />
                                    <p>Modelagem de sistemas</p>
                                </div>
                            </div >
                            <div onClick={manutencao3} className='carrosselimg'>
                                <div>
                                    <GrSystem size={30} />
                                    <p>Implatação e manutenção de sistemas</p>

                                </div>
                            </div >
                            <div onClick={manutencao3} className='carrosselimg'>
                                <div>
                                    <SlNotebook size={30} />
                                    <p>Ppe</p>
                                </div>
                            </div >

                        </Carousel >
                        <center>
                            <small>⬆ Arraste para o lado ⬆</small>
                            <p>==========================={">"}</p>
                        </center>
                    </div >

                    <div className='materias-web'>

                        <div onClick={humanas3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>
                                <GiCarpetBombing color='orange' size={60} />
                                <p>Humanas</p>
                            </div>
                        </div>


                        <div onClick={matematica3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>

                                <PiMathOperationsFill color='blue' size={60} />
                                <p>Matematica</p>

                            </div>
                        </div>

                        <div className='card-materia ' onClick={natureza3}>
                            <div className='justify-center items-center flex text-center flex-col'>

                                <MdScience color='lime' size={60} />
                                <p>Natureza</p>

                            </div>
                        </div>


                        <div onClick={linguagens3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>
                                <IoLanguage color='red' size={60} />
                                <p>Linguagens</p>
                            </div>

                        </div >


                        <div onClick={desi3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>

                                <GoFileCode color='darkblue' size={60} />
                                <p>Desenvolvimento de sistemas</p>

                            </div>
                        </div >
                        {/* 
                        <div onClick={modelagem3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>

                                <BiNetworkChart color='cyan' size={60} />
                                <p>Modelagem de sistemas</p>

                            </div>
                        </div > */}

                        {/* <div onClick={manutencao3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>
                                <GrSystem size={60} />
                                <p>Implatação e manutenção de sistemas</p>
                            </div>
                        </div > */}
                        <div onClick={db3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>
                                <FaDatabase color='purple' size={60} />
                                <p>Banco de dados</p>
                            </div>
                        </div >
                        <div onClick={testes3} className='card-materia '>
                            <div className='justify-center items-center flex text-center flex-col'>
                                <GrTestDesktop color='cyan' size={60} />
                                <p>Testes de sistema</p>
                            </div>
                        </div >
                    </div>
                </section >
            </main >
            <Footer />
        </>
    )
}

export default Home3
