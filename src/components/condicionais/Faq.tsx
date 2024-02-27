import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){

    const[ativo,setAtivo] = useState<number>(0)
    return(
        <div className="flex flex-col gap-2 md:w-3/4"> 
            <Pergunta textoPergunta="Qual é a cor do céu" resposta="O céu é azul"/>
            <Pergunta textoPergunta="Quantas cores tem o Arco-iris?" resposta="7 Cores"/>
            <Pergunta textoPergunta="React é um framework?" resposta="O céu é azul"/>
            <Pergunta textoPergunta="Quais as principais funcionalidades do Next.js" resposta="O céu é azul"/>
        </div>
    )
}