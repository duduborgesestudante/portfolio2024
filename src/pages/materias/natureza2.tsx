import { Header } from "../components/header"
import natureza1 from "../../images/natureza1.png"
import natureza2 from "../../images/natureza2.png"
import natureza3 from "../../images/natureza3.png"
import natureza4 from "../../images/natureza5.png"
import natureza5 from "../../images/natureza4.png"

import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Natureza2() {
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
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAF9bEs8z_Q/57lAkXSCv734cZ_nv_jy2Q/edit?utm_content=DAF9bEs8z_Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Apresentação Revisão de Orgânica</h2>
                                <img src={natureza3} alt="" />
                                <p>
                                    Uma Apresentação de revisão sobre o que vimos em química orgânica
                                </p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGNqjqhO1o/TZqBWIjsW9fq4yAv_8ZJMg/edit?utm_content=DAGNqjqhO1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Relações ecológicas</h2>
                                <img src={natureza4} alt="" />
                                <p>
                                    Criamos uma revista (no meu caso um livrinho) sobre Relações ecológicas
                                </p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href={natureza5}>
                            <div className="grid-natureza">
                                <h2>Cartaz Uso do plastico</h2>
                                <img className="cartaz" src={natureza5} alt="" />
                                <p>
                                    Criamos um cartaz de concientização sobre o uso do plastico
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
export { Natureza2 }
