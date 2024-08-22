import { Header } from "../components/header"
import linguagens1 from "../../images/linguagens1.jpg"
import linguagens2 from "../../images/linguagens2.png"
import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"

function Linguagens1() {
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

                        <a className="a-beatddoneckles" target="_blank" href="https://drive.google.com/file/d/1UaLybCz_T8IGVx_kOJKJajc-ASyorctI/view?usp=sharing">
                            <div className="grid-linguagens">
                                <h2>Microfiction and the use of Simple Past</h2>
                                <img className="retrato" src={linguagens1} alt="" />
                                <p>O objetivo desta atividade prática é praticar o ingles, fizemos como
                                    se fosse uma postagem no Instagram utilizando o inglês para fazer a legenda</p>
                            </div>
                        </a>

                        <a className="a-beatddoneckles" href="https://www.canva.com/design/DAF9naOrv3Q/EhhznwyLivxzfsad8MQdPQ/edit?utm_content=DAF9naOrv3Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-linguagens">
                                <h2>Pré-modernismo</h2>
                                <img src={linguagens2} alt="" />
                                <p>Cada grupo deve pesquisar e criar uma apresentação com os seguintes itens relativos à obra estudada</p>
                            </div>
                        </a>
                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}
export { Linguagens1 }