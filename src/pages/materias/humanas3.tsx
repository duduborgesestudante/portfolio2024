import { Header } from "../components/header"
import humanas6 from "../../images/humanas6.jpg"
import humanas7 from "../../images/humanas7.png"




import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"

function Humanas3() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-humanas">
                    <h1>Humanas</h1>
                </section>

                <section>
                    <div className="total-humanas">

                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGU3rJDEI0/Q7jqGbMdKviPCcvSL5PdKA/edit">
                            <div className="grid-humanas">
                                <h2>A Ditadura Civil-Militar no Brasil</h2>
                                <img src={humanas6} alt="" />
                                <p >Nessa ativide, tivemos que escolher um ocorrido da ditadura militar e comntar sobre, nos escolhemos a novembrada</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGSPcWLoN4/QdPX6kAk8OkfZc9Ix7BQVw/view">
                            <div className="grid-humanas">
                                <h2>Guerra Fria</h2>
                                <img src={humanas7} alt="" />
                                <p >Realizamos uma pesquisa e construa uma apresentação no Canva capaz de explicar a complexidade de conflitos, disputas, guerras, acordos e sentimentos relacionados à Guerra Fria</p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Humanas3 }