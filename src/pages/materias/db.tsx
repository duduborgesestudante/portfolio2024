import { Header } from "../components/header"
import sem from "../../images/semAtv.png"
import { Voltar } from "../components/voltar"
import db1 from '../../images/db1.png'
import db2 from '../../images/db2.png'
import db4 from '../../images/db4.png'


function BancoDeDados() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-desi">
                    <h1>Banco de Dados</h1>
                </section>
                <section>
                    <div className="total-humanas">

                        <a className="a-beatddoneckles" href="https://docs.google.com/document/d/1gLcJyFhPtFRpDsiKzQCFBo5eb25gnuWwA0W_Zi07Caw/edit?usp=sharing">
                            <div className="grid-natureza">
                                <h2>Lista de Exercícios - Modelo Lógico</h2>
                                <img src={db1} alt="" />
                                <p>
                                    Fizemos uma lista de exercicio sobre Modelo Lógico usando o BRmodelo
                                </p>
                            </div>

                        </a>
                        <a className="a-beatddoneckles" href=" https://www.canva.com/design/DAGMh3uSgxg/VF0P5RCuBuYKaqzB6TJQBQ/edit?utm_content=DAGMh3uSgxg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Modelagem Sistema de Gestão de Consultório Médico</h2>
                                <img src={db2} alt="" />
                                <p>
                                    Essa atividade foi feita em grupo, onde fizemos um sistema de gestão de consultório médico usando o BRmodelo, fizemos um modelo lógico e um conceitual
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" href="https://docs.google.com/document/d/1Vkp3FYQWOwyeDT-5kW7JWJ81JRtnlpim_tyGKhaFWA0/edit">
                            <div className="grid-natureza">
                                <h2>Pesquisa normalização de dados</h2>
                                <img src={db4} alt="" />
                                <p>
                                    Pesquisa em grupo sobre normalização de dados
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}
export { BancoDeDados }