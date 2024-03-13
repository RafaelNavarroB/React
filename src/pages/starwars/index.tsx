import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/Background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars(){
    const{processando,obterPersonagens,personagens}= useStarWars()

    return (
        <div className=' flex justify-center gap-5 flex-col items-center h-screen'>
            <Background></Background>
            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
            Obter
            </button> 
             
             {processando ? (
                <div>Processando...</div>
            ) :personagens.length> 0 ? (
                <Personagens personagens={personagens}/>
            ) :(
                <div>Nenhum Personagem</div>
            )}
   
        </div>
        
    )


}