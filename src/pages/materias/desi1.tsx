import { Header } from "../components/header"
import desi1 from "../../images/desi1.png"
import { Footer } from "../components/footer"
import sem from "../../images/semAtv.png"

function Desi1() {
    return (
        <>
            <Header />
            <main>
                <section className="title-desi">
                    <h1>Desinvolvimento de sistemas</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" href="https://calculadora-de-horas-tau.vercel.app/">
                        <div className="grid-natureza">
                            <h2>Calculadora de Horas</h2>
                            <img src={desi1} alt="" />
                            <p>Primeira atividade com o framework ReactJs, onde fizemos uma calculadora
                                de horas, onde voce coloca a hora inicial e a hora final e ele faz o cálculo</p>
                        </div>

                    </a>
                    <a className="a-beatddoneckles" href="https://calculadora-de-horas-tau.vercel.app/">
                        <div className="grid-natureza">
                            <h2>API Springboot</h2>
                            <img src={sem} />
                            <p>
                                Primeira atividade de backend utilizando o framework Springboot em 
                                java, fizemos uma api para realizar o metodo POST e GET de livros,
                                cadastrando livros e buscando a lista de livros cadastrados
                            </p>
                        </div>

                    </a>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Desi1 }