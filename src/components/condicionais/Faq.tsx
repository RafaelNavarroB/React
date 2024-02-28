import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
    const[ativo,setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice:number){
        if(indice ===ativo){
            setAtivo(-1)
        } else{
            setAtivo(indice)
        }

    }
    
    return(
        <div className="flex flex-col gap-2 md:w-3/4"> 
            <Pergunta 
            indice={0}
            aberta={ativo===0}
            textoPergunta="Qual é a cor do céu" 
            resposta="O céu é azul"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta 
            indice={1}
            aberta={ativo===1}
            textoPergunta="Quantas cores tem o Arco-iris?" 
            resposta="7 Cores"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
            indice={2}
            aberta={ativo===2} 
            textoPergunta="React é um framework?" 
            resposta="O céu é azul"
            alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
            indice={3}
            aberta={ativo===3} 
            textoPergunta="Quais as principais funcionalidades do Next.js" 
            resposta="O céu é azul"
            alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}