import { Header } from "../components/header"
import natureza4 from "../../images/natureza5.png"
import natureza5 from "../../images/natureza4.png"
import natureza6 from "../../images/natureza6.png"
import natureza7 from "../../images/natureza7.png"
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
                        <a target="_blank" className="a-beatddoneckles" href={natureza5}>
                            <div className="grid-natureza">
                                <h2>Cartaz Uso do plastico</h2>
                                <img className="cartaz" src={natureza5} alt="" />
                                <p>
                                    Criamos um cartaz de concientização sobre o uso do plástico. Me senti muito importante para o meio ambiente, apos essa atividade.
                                </p>
                                <br />
                                <p>Habilidades: <b>H15 e H18.</b></p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href={'https://www.canva.com/design/DAGIlNGDNcw/8PSiM_2bZQy7hg7uGPwrYw/edit?utm_content=DAGIlNGDNcw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}>
                            <div className="grid-natureza">
                                <h2>EletroMagnetismo</h2>
                                <img src={natureza6} alt="" />
                                <p>
                                    Fizemos uma apresentação sobre A Lei de Faraday e a Lei de Lenz. Achei bem maneiro de fazer, descobri o que é a Lei de faraday, ou como apelidei, Lei de Faraó
                                </p>
                                <br />
                                <p>Habilidades: <b>H36</b></p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href={'https://www.canva.com/design/DAGPD3P3JTQ/ISOjl4HtAOFoNJVa2UlYuQ/edit?utm_content=DAGPD3P3JTQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}>
                            <div className="grid-natureza">
                                <h2>Circuitos elétricos</h2>
                                <img src={natureza7} alt="" />
                                <p>
                                    Fizemos um mapa mental sobre circuitos eletricos. Gostei de fazer, aprendi bastante sobre o assunto
                                </p>
                                <br />
                                <p>Habilidades: <b>H35</b></p>
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
