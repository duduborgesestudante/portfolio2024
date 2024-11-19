import { Header } from "../components/header"
import linguagens3 from "../../images/linguagens3.png"
import linguagens4 from "../../images/linguagens4.png"
import linguagens5 from  '../../images/linguagens5.jpg'
import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"

function Linguagens3() {
    return (
        <>
            <Header />
            <main  >
                <Voltar />

                <section className="title-linguagens">
                    <h1>Linguagens</h1>
                </section>
                <section>
                    <div className="total-humanas">
                        <a className="a-beatddoneckles" target="_blank" href={linguagens3} >
                            <div className="grid-linguagens">
                                <h2 className="text-xl">Nota Redação</h2>
                                <img className="" src={linguagens3} alt="" />
                                <p>Aqui temos a nota do nosso simulado de redação</p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href={"https://www.canva.com/design/DAGBRGHeUfU/l5U_GhY3zG9okF0rNHlrmg/edit?utm_content=DAGBRGHeUfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"} >
                            <div className="grid-linguagens">
                                <h2 className="text-xl">Revista Literária</h2>
                                <img className=" m-auto" src={linguagens4} alt="" />
                                <p>Criamos um poema sobre o livro "Solitarios"</p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles"  >
                            <div className="grid-linguagens">
                                <h2 className="text-xl">Eu criança</h2>
                                <img className=" m-auto" src={linguagens5} alt="" />
                                <p>Literalmente eu criança</p>
                                <a href={linguagens5} download="linguagens5.jpg">Clique aqui para baixar a imagem</a>
                            </div>
                        </a>
                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}
export { Linguagens3 }