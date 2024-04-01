import { Header } from "../components/header"
import desi1 from "../../images/desi1.png"
import { Footer } from "../components/footer"
function Desi1() {
    return (
        <>
            <Header />
            <main className="main2" >
                <section className="title-natureza">
                    <h1>Desinvolvimento de sistemas</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" href="https://calculadora-de-horas-tau.vercel.app/">
                        <div className="grid-natureza">
                            <img src={desi1} alt="" />
                            <h2>Calculadora de Horas</h2>
                            <p>Primeira atividade com o framework ReactJs, onde fizemos uma calculadora
                                 de horas, onde voce coloca a hora inicial e a hora final e ele faz o cálculo</p>
                        </div>
                        
                    </a>
                   
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Desi1 }