interface DisplayProps{
    valor:number
}

export default function Display(props:DisplayProps){
    return(
        <div className={`
        flex justify-center flex-1
        text-5xl font-black 
        bg-zinc-800 rounded-md p-5 
        text-white`}>
            {props.valor}
        </div>
    )
}