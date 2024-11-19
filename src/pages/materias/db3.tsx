import { Header } from "../components/header"
import { Voltar } from "../components/voltar"
import db6 from '../../images/db5.png'
import db7 from '../../images/db7.png'


function BancoDeDados3() {
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

                        <a className="a-beatddoneckles" href="https://docs.google.com/document/d/147Aa2ypLgM72L9dPAxG-YmNoR28w6srAdI5Yf9dtMr0/edit?tab=t.0">
                            <div className="grid-natureza">
                                <h2>Banco de Dados Biblioteca</h2>
                                <img src={db7} alt="" />
                                <p>
                                    Fizemos uma lista de exercicio de banco de dados simulando um sistema de biblioteca
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" href="https://drive.google.com/file/d/1QU9AYWljZvQpUyRXUiCHtr8sc29PYJxi/view">
                            <div className="grid-natureza">
                                <h2>Left e Right JOIN</h2>
                                <img src={db6} alt="" />
                                <p>
                                   Aprendemos sobre left e rigth join no pgAdmin
                                </p>
                            </div>
                        </a>
                       
                    </div>
                </section>
            </main>
        </>
    )
}
export { BancoDeDados3 }