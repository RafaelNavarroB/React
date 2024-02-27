import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronRight} from "@tabler/icons-react"
import IfElse from "./IfElse"

interface PerguntaProps {
    textoPergunta: string 
    resposta: string
    aberta: boolean
}

export default function Pergunta(props:PerguntaProps){
    return(
        <div className={`
        border border-white rounded-md overflow-hidden 
        `}>
            <div 
            className="bg-white p-5 cursor-pointer select-none text-blue-800 font-bold flex justify-between"
            onClick={()=> setAberta(!aberta)}>
                <span>{props.textoPergunta}</span>
                {/* <IfElse teste={aberta}>
                    <IconChevronDown/>
                    <IconChevronRight/>
                </IfElse> */}

                {props.aberta ? <IconChevronDown/> : <IconChevronRight/>}


                

            </div>
            {/* {aberta ? "Sim": "Não"} FICA EVIDENTE O TEMPO INTEIRO O SIM E O NÃO  NO OUTRO EXEMPLO OU APARECE ABERTO OU NADA */}
            {/* {aberta && (
            <div className= "p-5 text-red-500">
            {props.resposta}
            </div>
            )} */}

            <If teste ={props.aberta}>
            <div className= "p-5 text-red-500">{props.resposta}</div>
            </If>

        </div>
    )
}