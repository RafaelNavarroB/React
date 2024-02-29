interface TabelaSerieAProps{
    times:string[]
} 

export default function TabelaSerieA(props: TabelaSerieAProps){
    
    
    // TRANSFORMANDO UMA STRING EM UM <LI>
    // USANDO FOR COM ARRAY
    const itens:any[]=[]
    for (let i = 0; i<props.times.length; i++){
        console.log(props.times[i])
        itens.push
        (<li key={props.times[i]} 
        className="text-xl list-decimal"
        >{props.times[i]}
        </li>)
    }
    // USANDO LISTA COM MAP
    const itens2 = props.times.map((time, i)=>{
        return(
            <li key={time} 
                className={`text-2xl list-decimal ${i % 2 === 0 ? 'text-blue-700' : 'text-red-700'}`}
                >
                {time}
            </li>
        )
    })
        
    return(
        <ol>
            {itens2}
        </ol>
    )
}