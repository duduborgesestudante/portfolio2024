import { Header } from "../components/header"
import redacao from "../../images/notaenem.png"
import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"

function Linguagens2() {
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
                        <a className="a-beatddoneckles" >
                            <div className="grid-linguagens">
                                <h2>Nota Redação</h2>
                                <img src={redacao} alt="" />
                                <p>Aqui temos a nota do nosso simulado de redação</p>
                            </div>
                        </a>
                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}
export { Linguagens2 }