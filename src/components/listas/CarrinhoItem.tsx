import ItemCarrinho from "@/model/ItemCarrinho";

export default function CarrinhoItem(props: ItemCarrinho){
    return(
        <div className={`
        flex items-center gap-2 rounded-md bg-blue-400 p-1
        `}>
            <span className={`
            flex justify-center items-center
            w-7 h-7 rounded-full 
            bg-blue-700 text-green-400 text-xl
            `}>{props.quantidade}</span>

            <span className={`
            text-green-400 text-2xl
            `}>
                {props.produto.nome} 
            </span>

            <span className={` text-yellow-800 text-2xl pr-5`}>
            {(props.produto.preco * props.quantidade).toFixed(2)}
            </span>

            
            
        </div>
    )

}