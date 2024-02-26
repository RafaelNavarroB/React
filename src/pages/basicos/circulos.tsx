import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return(
        <div className="flex justify-around items-center h-screen bg-red-400 ">
            <Circulo texto="Circ #1"/>
            <Circulo texto="Circ #2" quasePerfeito={true}/>
            <Circulo texto="Circ #3"/>
            <Circulo texto="Circ #4"/>
        </div>
    )
}