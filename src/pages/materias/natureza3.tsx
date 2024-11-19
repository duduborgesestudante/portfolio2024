import { Header } from "../components/header"
import natureza4 from "../../images/natureza5.png"
import natureza5 from "../../images/natureza4.png"
import natureza6 from "../../images/natureza6.png"
import natureza7 from "../../images/natureza7.png"
import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Natureza3() {
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
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGNqjqhO1o/TZqBWIjsW9fq4yAv_8ZJMg/edit?utm_content=DAGNqjqhO1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Relações ecológicas</h2>
                                <img src={natureza4} alt="" />
                                <p>
                                    Criamos uma revista (no meu caso um livrinho) sobre Relações ecológicas, Me diverti muito fazendo, achei queficou muito bonito!
                                </p>
                                <br />
                                <p>Habilidades: <b>H15 e H18.</b></p>
                            </div>
                        </a>

                    </div>

                </section>
            </main>
            <Footer />
        </>

    )
}
export { Natureza3 }
