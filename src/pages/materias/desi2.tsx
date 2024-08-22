import { Header } from "../components/header"
import desi3 from "../../images/desi3.png"
import desi4 from "../../images/desi4.png"
import desi5 from "../../images/desi5.png"



import { Footer } from "../components/footer"

import { Voltar } from "../components/voltar"

function Desi2() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-desi">
                    <h1>Desinvolvimento de sistemas</h1>
                </section>
                <section>
                    <div className="total-humanas">
                        <a className="a-beatddoneckles" target="_blank" href="https://api-github-nu.vercel.app/">
                            <div className="grid-natureza">
                                <h2>API Github</h2>
                                <img src={desi3} />
                                <p>
                                    Criamos um site utilizando react e uma api publica do github, para consultar os dados de acordo com o nome do usuario
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href="https://api-github-nu.vercel.app/">
                            <div className="grid-natureza">
                                <h2>Use Navigate</h2>
                                <img src={desi4} />
                                <p>
                                    Aprendemos sobre a biblioteca React-Router-Dom para aplicar rotas e navegação entre paginas
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href="https://biblioadmin.vercel.app/">
                            <div className="grid-natureza">
                                <h2>Projeto Biblioteca</h2>
                                <img src={desi5} />
                                <p>
                                    Fizemos um sistema funcional (não sabemos upar o backend) para gestão de uma bliblioteca, com varias funções como, adicionar, excluir e editar livros e alunos, isso se você for uma bibliotecaria
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export { Desi2 }