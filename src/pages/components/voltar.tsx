import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function Voltar(){
    return(
     <>
     <div className="voltar">
     <Link to={"/"}>
        <IoArrowBack size={30} color="#BF0404"/>
     </Link>
     </div>
     </>   
    )
}
export {Voltar}