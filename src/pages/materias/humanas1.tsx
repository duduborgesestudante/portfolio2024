import { Header } from "../components/header"
import humanas1 from "../../images/humanas1.png"
import humanas2 from "../../images/humanas2.png"
import humanas3 from "../../images/humanas3.png"
import humanas4 from "../../images/humanas4.png"



import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"

function Humanas1() {
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
                        <a target="_blank" className="a-beatddoneckles" href="https://docs.google.com/presentation/d/16KeuIyuRsdEWu-yYq13cmajcMLn0RZYuU7g9Dg9Ikdk/edit?usp=sharing">
                            <div className="grid-humanas">
                                <h2>Seminário GeoPolitica</h2>
                                <img src={humanas1} alt="" />
                                <p >Comparamos as diversas regiões geopolíticas
                                    visando comparar a atual conjuntura geopolítica com o histórico pregresso das ordens mundiais</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAF-jnRoFh0/UJjXdZdkPMZHwfLiK_gfZg/edit?utm_content=DAF-jnRoFh0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-humanas">
                                <h2>Como era a Angola antes da colonização</h2>
                                <img src={humanas2} alt="" />
                                <p >Escolhi um país que sofreu com o processo de colonização,
                                    após a 2ª Revolução Industrial e contei sua trajetória por
                                    meio de fotos, mapas e desenhos</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://docs.google.com/document/d/1UoqXACD4e7wVjDwKct3_AuVv4eJyGPmHqRQ65TFAM-Y/edit?usp=sharing">
                            <div className="grid-humanas">
                                <h2>A Grande Guerra (Filme 1917)</h2>
                                <img src={humanas3} alt="" />
                                <p >Algumas questões sobre o filme que assistimos em aula, sobre a primeira guerra mundial</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGHF0Tviek/AaclKRZA8ktoc-rx1iWnjA/edit?utm_content=DAGHF0Tviek&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-humanas">
                                <h2>Regimes totalitaristas</h2>
                                <img src={humanas4} alt="" />
                                <p >Nessa atividade, cada grupo teria que escolher um filme e apontar algumas semelhanças com o regime totalitarista, eu escolhi o filme "Jogos vorazes", fiz este trabalho com meu mano rafagath</p>
                            </div>
                        </a>
                        <a target="_blank" className="a-beatddoneckles" href="https://www.canva.com/design/DAGHF0Tviek/AaclKRZA8ktoc-rx1iWnjA/edit?utm_content=DAGHF0Tviek&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-humanas">
                                <h2>Regimes totalitaristas</h2>
                                <img src={humanas4} alt="" />
                                <p >Nessa atividade, cada grupo teria que escolher um filme e apontar algumas semelhanças com o regime totalitarista, eu escolhi o filme "Jogos vorazes", fiz este trabalho com meu mano rafagath</p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Humanas1 }