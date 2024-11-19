import { Header } from "../components/header"
import desi4 from "../../images/desi4.png"



import { Footer } from "../components/footer"

import { Voltar } from "../components/voltar"

function Desi3() {
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
                        <a className="a-beatddoneckles" target="_blank" href="https://drive.google.com/file/d/1u6zj1P7FIDy8G0__o15odfVs9cIW1c_8/view?usp=sharing">
                            <div className="grid-natureza">
                                <h2>Express</h2>
                                <img src={"https://www.appsyoda.com/blogimages/expressjs-nodejs.png"} />
                                <p>
                                    Começamos a aprender sobre o express
                                </p>
                            </div>
                        </a>
                        <a className="a-beatddoneckles" target="_blank" href="https://drive.google.com/file/d/1u6zj1P7FIDy8G0__o15odfVs9cIW1c_8/view?usp=sharing">
                            <div className="grid-natureza">
                                <h2>Tarefa 02</h2>
                                <img src={"https://www.appsyoda.com/blogimages/expressjs-nodejs.png"} />
                                <p>
                                    Usamos nossos conhecimentos novos de express para realizar uma tarefa
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
export { Desi3 }