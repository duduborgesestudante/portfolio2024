import { Header } from "../components/header"
import matematica1 from "../../images/matematica1.png"
import { Footer } from "../components/footer"
function Matematica1() {
    return (
        <>
            <Header />
            <main className="main2">
                <section className="title-matematica">
                    <h1>Matemática</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" href="https://youtu.be/QD5ObRhKrgc">
                        <div className="grid-matematica">
                            <img src={matematica1} alt="" />
                            <h2>Caça ao tesouro</h2>
                            <p>Nessa atividade produzimos um vídeo de caça ao tesouro usando coordenadas</p>
                        </div>
                    </a>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Matematica1 }