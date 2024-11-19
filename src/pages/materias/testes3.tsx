import { Header } from "../components/header"
import apresentacao from "../../assets/Revisao-Testes-de-Sistemas.pdf"
import teste1 from "../../images/testes1.png"
import { Footer } from "../components/footer"
import { Voltar } from "../components/voltar"
function Testes3() {
     return (
          <>
               <Header />
               <main>
                    <Voltar />

                    <section className="title-natureza">
                         <h1>Testes</h1>
                    </section>
                    <section>
                         <div className="total-humanas">
                              <a target="_blank" className="a-beatddoneckles" href={apresentacao}>
                                   <div className="grid-natureza">
                                        <h2>Apresentação testes de sistemas</h2>
                                        <img src={teste1} alt="" />
                                        <p>
                                             Uma Apresentação sobre tudo que vimos na disciplina de testes de sistema
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
export { Testes3 }
