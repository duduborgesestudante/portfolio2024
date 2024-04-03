import { Header } from "../components/header"
import sem from "../../images/semAtv.png"
function Modelagem1() {
    return (
        <>
       <Header/>
     
       <main>
                <section className="title-desi">
                    <h1>Modelagem de sistemas</h1>
                </section>
                <section>
                    <a className="a-beatddoneckles" >
                        <div className="grid-natureza">
                            <h2>Sem atividade</h2>
                            <img src={sem} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nemo aperiam quam consequatur esse facilis recusandae 
                                blanditiis, magni voluptatum 
                                </p>
                        </div>

                    </a>
                    <a className="a-beatddoneckles" >
                        <div className="grid-natureza">
                            <h2>Sem atividade</h2>
                            <img src={sem} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nemo aperiam quam consequatur esse facilis recusandae 
                                blanditiis, magni voluptatum 
                                </p>
                        </div>

                    </a>
                </section>
            </main>
        
       </>
    )
}
export { Modelagem1 }