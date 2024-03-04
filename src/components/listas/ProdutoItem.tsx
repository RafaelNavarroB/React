import ModeloProduto from "@/model/produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps{
    produto: ModeloProduto
    comprar: (produto: ModeloProduto)=>void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const {produto} = props
    return(
        <div className={`
            flex flex-col border
            border-zinc-400 rounded-md
            p-1
        `}>
            <Image src={props.produto.imagem} 
            width={300} height={200}
            alt="Imagem do Produto"
            className="rounded-md"
            />

        <div className="flex flex-col p-3 gap-2">
                <div className=" flex justify-between items-center ">
                <div className="text-2xl font-black">{produto.nome}</div>
                <div className="text-green-500 font-bold">R$ {produto.preco}</div>
            </div>
                <div className="text-red-500 ">{produto.descricao}</div>
            </div>
            <div>
                <button className='botao flex w-full justify-center gap-2'
                onClick={()=>props.comprar(produto)}> <IconShoppingCart/>Comprar </button>
            </div>
        </div>
    )
}