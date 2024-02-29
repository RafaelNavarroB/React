import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica(){
    const times = [
    'Palmeiras',
    'Grêmio',
    'Atlético-MG',
    'Flamengo',
    'Botafogo',
    'Bragantino',
    'Fluminense',	
    'Athletico-PR',	
    'Internacional',	
    'Fortaleza',
    ]
    return(	

        <div className={`
         flex flex-col justify-center items-center h-screen  
        `}>
        <h1 className="flex items-center gap-2 text-5xl font-black">
            <IconBallFootball size={50} stroke={1.5}/>
            Tabela Série A
        </h1>
        <TabelaSerieA times ={times}/>
        </div>
    )
}