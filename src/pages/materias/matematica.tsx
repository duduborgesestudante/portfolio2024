import { Header } from "../components/header"
import matematica1 from "../../images/matematica1.png"
import matematica2 from "../../images/matematica2.jpg"
import matematica3 from "../../images/Matematica3.png"


import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Matematica1() {
    return (
        <>
            <Header />
            <main>
            <Voltar/>
                <section className="title-matematica">
                    <h1>Matemática</h1>
                </section>
                <section className="total-humanas">
                    <a target="_blank"  className="a-beatddoneckles" href="https://youtu.be/QD5ObRhKrgc">
                        <div className="grid-matematica">
                            <h2>Caça ao tesouro</h2>
                            <img src={matematica1} alt="" />
                            <p>Nessa atividade produzimos um vídeo de caça ao tesouro usando coordenadas</p>
                        </div>
                    </a>
                    <a target="_blank"  className="a-beatddoneckles" href="https://docs.google.com/document/d/1VgFNII3bXmGxX58jmIaWogXEWBo_MOH8gjIXimPY3ks/edit?usp=sharing">
                        <div className="grid-matematica">
                            <h2>Quebrando a banca</h2>
                            <img src={matematica2} alt="" />
                            <p>Respondemos algumas perguntas sobre o filme assistido em aula, o "Quebrando a banca"</p>
                        </div>
                    </a>
                    <a target="_blank"  className="a-beatddoneckles" href="https://docs.google.com/document/d/156kgqsii7o6kiUnJaEqVYC1OJCCu3EqhD425PsMPqkg/edit?usp=sharing">
                        <div className="grid-matematica">
                            <h2>Banco imobiliário</h2>
                            <img src={matematica3} alt="" />
                            <p>Nessa atividade, criamos um jogo com objetivo de ser melhor que o banco imobiliário, com as mesmas caracteristicas so que com um contexto de Florianopolis</p>
                        </div>
                    </a>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Matematica1 }