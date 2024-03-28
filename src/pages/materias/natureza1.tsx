import { Header } from "../components/header"
import natureza1 from "../../images/natureza1.png"
import { Footer } from "../components/footer"
function Natureza1() {
    return (
        <>
            <Header />
            <main className="main2">
                <section className="title-natureza">
                    <h1>Natureza</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" href="https://docs.google.com/document/d/1GqYUk4Fjr5e4UnWgsfuvT4XA0T4OJBY6e1RtwfgB0pM/edit?usp=sharing">
                        <div className="grid-natureza">
                            <img src={natureza1} alt="" />
                            <h2>Atividade prática de resistores</h2>
                            <p>O objetivo desta atividade prática é permitir que os alunos compreendam e
                                experimentem as diferenças entre circuitos de resistores em série e em paralelo,
                                explorando como a resistência total é afetada em cada configuração</p>
                        </div>
                    </a>
                </section>
            </main>
            <Footer />
        </>

    )
}
export { Natureza1 }
