import { IoArrowBack } from "react-icons/io5";

function Voltar() {
    return (
        <>
            <div className="voltar">
                <a onClick={() => { window.history.back() }}>
                    <IoArrowBack size={30} color="#BF0404" />
                </a>
            </div>
        </>
    )
}
export { Voltar }