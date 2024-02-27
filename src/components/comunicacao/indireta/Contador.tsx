import Display from "./Display";
import Botoes from "./Botoes";
import { useState } from "react";

export default function Contador(){
    const[num,setNum] = useState<number>(0)

    function incrementar(valor:number){
        setNum(num + valor)
    }
    function decrementar(valor:number){
        setNum(num - valor)
    }


    return(
        <div className={`
            flex flex-col border 
            border-zinc-400 rounded-lg p-2
            w-48 h-48
        `}>
            <Display valor={num}/>
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>
    )
}