import useStarWars from "@/data/hooks/useStarWars"

interface PersonagensProps{
    personagens:any[]
}


export default function Personagens(props:PersonagensProps){
    const{processando,obterPersonagens,personagens}= useStarWars()
    function renderizarPersonagens(){
        return( 
            <ul>
            {props.personagens.map((p:any)=> (
                <li key={p.name}>{p.name}</li>
            ))}
            </ul>
            )
    }

// 44 Min
    return(
        <div>{renderizarPersonagens()}</div>
    )
}