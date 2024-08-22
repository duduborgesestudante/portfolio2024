import { Header } from "../components/header"
import desi1 from "../../images/desi1.png"
import desi2 from "../../images/desi2.png"



import { Footer } from "../components/footer"

import { Voltar } from "../components/voltar"

function Desi1() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-desi">
                    <h1>Desinvolvimento de sistemas</h1>
                </section>
                <section>
                    <div className="total-humanas">
                        <a className="a-beatddoneckles" target="_blank" href="https://calculadora-de-horas-tau.vercel.app/">
                            <div className="grid-natureza">
                                <h2>Calculadora de Horas</h2>
                                <img src={desi1} alt="" />
                                <p>Primeira atividade com o framework ReactJs, onde fizemos uma calculadora
                                    de horas, onde voce coloca a hora inicial e a hora final e ele faz o cálculo</p>
                            </div>

                        </a>
                        <a className="a-beatddoneckles" target="_blank" href="https://calculadora-de-horas-tau.vercel.app/">
                            <div className="grid-natureza">
                                <h2>API Springboot</h2>
                                <img src={desi2} />
                                <p>
                                    Primeira atividade de backend utilizando o framework Springboot em
                                    java, fizemos uma api para realizar o metodo POST e GET de livros,
                                    cadastrando livros e buscando a lista de livros cadastrados
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Desi1 }