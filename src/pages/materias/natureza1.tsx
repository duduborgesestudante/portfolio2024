import { Header } from "../components/header"
import natureza1 from "../../images/natureza1.png"
import natureza2 from "../../images/natureza2.png"

import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Natureza1() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-natureza">
                    <h1>Natureza</h1>
                </section>
                <section>
                    <div className="total-humanas">

                        <a target="_blank" className="a-beatddoneckles" href="https://docs.google.com/document/d/1GqYUk4Fjr5e4UnWgsfuvT4XA0T4OJBY6e1RtwfgB0pM/edit?usp=sharing">
                            <div className="grid-natureza">
                                <h2>Atividade prática de resistores</h2>
                                <img src={natureza1} alt="" />
                                <p>O objetivo desta atividade prática é permitir que os alunos compreendam e
                                    experimentem as diferenças entre circuitos de resistores em série e em paralelo,
                                    explorando como a resistência total é afetada em cada configuração</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAF-u3fQHHg/eP-7wucn-D_AU-f0aDIqyw/edit?utm_content=DAF-u3fQHHg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Meme sobre evolução</h2>
                                <img className="natureza2" src={natureza2} alt="" />
                                <p>Criei um meme original e informativo sobre a Evolução, utilizando
                                    humor e criatividade para satirizar, questionar ou celebrar essa jornada científica. </p>
                            </div>
                        </a>
                    </div>

                </section>
            </main>
            <Footer />
        </>

    )
}
export { Natureza1 }
