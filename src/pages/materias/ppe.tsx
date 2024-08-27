import { Header } from "../components/header";
import { Voltar } from "../components/voltar";
import sem from '../../images/semAtv.png'
import { MdScience } from "react-icons/md";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
                    <div className='justify-center items-center flex w-[40%] m-auto '>
                        <Accordion type="single" className=" w-full p-2 rounded-lg shadow-md hover:decoration-transparent hover:scale-110 transition-all duration-200 " collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex justify-between">
                                    <MdScience color='lime' className="transform-none rotate-0" size={60} />
                                    <p className="text-xl mr-12">Natureza</p>
                                </AccordionTrigger>
                                <AccordionContent className="w-full rounded-lg m-auto">
                                    <a className="" href="">
                                        <div className=" ">
                                            <h2 className="text-xl text-center">Certificado</h2>
                                            <img className="w-[300px] m-auto my-2" src={sem} alt="" />
                                            <p>Certificado do curso (nome do curso) na plataforma: <a target="_blank" className="text-blue-500" href="https://aprendamais.mec.gov.br/">https://aprendamais.mec.gov.br/</a></p>
                                        </div>
                                    </a>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </section>
            </main>
        </>
    )
}
export { Ppe }