interface BotoesProps{
    inc: (valor:number) => void
    dec: (valor:number) => void

}

export default function Display(props:BotoesProps){
    return(
        <div className="flex justify-between 
                        pt-2 gap-2">
            <button className="botao flex-1" onClick={()=>props.dec(7)}>
                -7
            </button>
            <button className="botao flex-1" onClick={()=>props.inc(20)}>
                +20
            </button>
        </div>
    )
}