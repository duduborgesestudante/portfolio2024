import { Header } from "../components/header"
import natureza1 from "../../images/natureza1.png"
import natureza2 from "../../images/natureza2.png"
import natureza3 from "../../images/natureza3.png"


import { Footer } from "../components/footer"
function Natureza1() {
    return (
        <>
            <Header />
            <main>
                <section className="title-natureza">
                    <h1>Natureza</h1>
                </section>
                <section>
                    <a target="_blank"  className="a-beatddoneckles" href="https://docs.google.com/document/d/1GqYUk4Fjr5e4UnWgsfuvT4XA0T4OJBY6e1RtwfgB0pM/edit?usp=sharing">
                        <div className="grid-natureza">
                            <img src={natureza1} alt="" />
                            <h2>Atividade prática de resistores</h2>
                            <p>O objetivo desta atividade prática é permitir que os alunos compreendam e
                                experimentem as diferenças entre circuitos de resistores em série e em paralelo,
                                explorando como a resistência total é afetada em cada configuração</p>
                        </div>
                    </a>
                    <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAF-u3fQHHg/eP-7wucn-D_AU-f0aDIqyw/edit?utm_content=DAF-u3fQHHg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                        <div className="grid-natureza">
                            <img className="natureza2" src={natureza2} alt="" />
                            <h2>Meme sobre evolução</h2>
                            <p>Criamos um meme sobre a evolução da especie seguindo o Darwinismo</p>
                        </div>
                    </a>
                    <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAF9bEs8z_Q/57lAkXSCv734cZ_nv_jy2Q/edit?utm_content=DAF9bEs8z_Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                        <div className="grid-natureza">
                            <img  src={natureza3} alt="" />
                            <h2>Apresentação Revisão de Orgânica</h2>
                            <p>
                                Uma Apresentação de revisão sobre o que vimos em química orgânica
                            </p>
                        </div>
                    </a>
                </section>
            </main>
            <Footer />
        </>

    )
}
export { Natureza1 }
