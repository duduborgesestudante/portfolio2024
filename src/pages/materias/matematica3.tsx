import { Header } from "../components/header"
import matematica4 from "../../images/matematica4.png"


import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Matematica3() {
    return (
        <>
            <Header />
            <main>
                <Voltar />
                <section className="title-matematica">
                    <h1>Matemática</h1>
                </section>
                <section className="total-humanas">
                    <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGVzDA4GlA/NABQJTAh0AMZ_jjiOwYZZw/edit">
                        <div className="grid-matematica">
                            <h2>Atividade de Geometria com sólidos de Platão</h2>
                            <img src={matematica4} alt="" />
                            <p>Fizemos os poliedros de platao utilizando bala de goma e palitos de churrasco</p>
                        </div>
                    </a>
                  
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Matematica3 }