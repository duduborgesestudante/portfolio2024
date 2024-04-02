import { Header } from "../components/header"
import linguagens1 from "../../images/linguagens1.jpg"
import linguagens2 from "../../images/linguagens2.png"
import { Footer } from "../components/footer"

function Linguagens1() {
    return (
        <>
            <Header />
            <main >
                <section className="title-linguagens">
                    <h1>Linguagens</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" href={linguagens1}>
                        <div className="grid-linguagens">
                            <h2>Microfiction and the use of Simple Past</h2>
                            <img className="retrato" src={linguagens1} alt="" />
                            <p>O objetivo desta atividade prática é praticar o ingles, fizemos como
                                se fosse uma postagem no Instagram utilizando o inglês para fazer a legenda</p>
                        </div>
                    </a>

                    <a className="a-beatddoneckles" href={linguagens1}>
                        <div className="grid-linguagens">
                            <h2>Pré-modernismo</h2>
                            <img src={linguagens2} alt="" />
                            <p>Cada grupo deve pesquisar e criar uma apresentação com os seguintes itens relativos à obra estudada</p>
                        </div>
                    </a>
                </section>

            </main>
            <Footer />
        </>
    )
}
export { Linguagens1 }