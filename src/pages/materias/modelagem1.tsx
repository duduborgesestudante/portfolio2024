import { Header } from "../components/header"
import modelagem1 from '../../images/modelagem1.png'
import modelagem2 from '../../images/modelagem2.png'
import modelagem3 from '../../images/modelagem3.png'



import { Voltar } from "../components/voltar"
function Modelagem1() {
    return (
        <>
            <Header />

            <main>
                <Voltar />

                <section className="title-desi">
                    <h1>Modelagem de sistemas</h1>
                </section>
                <section>
                    <div className="total-humanas">

                        <a className="a-beatddoneckles" href="https://www.canva.com/design/DAGEiwO6QV0/efisikOcx9aJghKddfBLRg/edit?utm_content=DAGEiwO6QV0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                            <div className="grid-natureza">
                                <h2>Sala de Aula invertida</h2>
                                <img src={modelagem1} alt="" />
                                <p>
                                    Nessa atividade tivemos que preparar uma apresentação para explicar para os outros colegas uma metodologia de desenvolvimento de software, na qual nosso grupo explicou sobre o DevOps
                                </p>
                            </div>

                        </a>
                        <a className="a-beatddoneckles" href="https://www.figma.com/design/joewCkgmNlsod04kNPv9FJ/SA?node-id=21-3&t=AUMcoubXGlSEuSg7-0" >
                            <div className="grid-natureza">
                                <h2>Wireframe de Alta Fidelidade</h2>
                                <img src={modelagem2} alt="" />
                                <p>
                                    Fizemos um Wireframe de alta fidelidade para as telas da nossa S.A. para a prototipagem do nosso projeto
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" href="https://docs.google.com/spreadsheets/d/1UEnapLpiBO3YyAnkfrJY2nIqgz-noBi4OciO4-feW1g/edit?gid=0#gid=0" >
                            <div className="grid-natureza">
                                <h2>Regra de Negocio</h2>
                                <img src={modelagem3} alt="" />
                                <p>
                                    Fizemos a regra de negócio da nossa S.A.
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>

        </>
    )
}
export { Modelagem1 }