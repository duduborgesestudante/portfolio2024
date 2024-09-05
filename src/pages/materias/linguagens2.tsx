import { Header } from "../components/header"
import redacao from "../../images/notaenem.png"
import maquete from "../../images/maquete.jpeg"
import poema from "../../images/poema.jpg"
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
                                <h2 className="text-xl">Nota Redação</h2>
                                <img src={redacao} alt="" />
                                <p>Aqui temos a nota do nosso simulado de redação</p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href={poema} >
                            <div className="grid-linguagens">
                                <h2 className="text-xl">Poema</h2>
                                <img className="h-96 w-72 m-auto" src={poema} alt="" />
                                <p>Criamos um poema sobre o livro "Solitarios"</p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href={maquete} >
                            <div className="grid-linguagens">
                                <h2 className="text-xl">Maquete</h2>
                                <img className="h-96 w-72 m-auto" src={maquete} alt="" />
                                <p>Criamos uma maquete de alguma cena sobre o livro "Solitarios"</p>
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