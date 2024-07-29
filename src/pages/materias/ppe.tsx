import { Header } from "../components/header";
import { Voltar } from "../components/voltar";

function Ppe() {
    return (
        <>
            <Header />
            <main>
                <Voltar />

                <section className="title-desi">
                    <h1>PPE</h1>
                </section>
                <section>
                    <div className="total-humanas">
                        <a className="a-beatddoneckles" >
                            <div className="grid-natureza">
                                <h2>Sem atividade</h2>
                                <img src={''} alt="" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nemo aperiam quam consequatur esse facilis recusandae
                                    blanditiis, magni voluptatum
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}
export {Ppe}