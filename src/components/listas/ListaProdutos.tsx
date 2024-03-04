import ProdutoItem from "./ProdutoItem"
import ModeloProduto from "@/model/produto"

interface ListaProdutosProps{
    produtos: ModeloProduto[]
    comprar: (produto:ModeloProduto)=> void
}

export default function ListaProdutos(props: ListaProdutosProps){
    return (
        <div className='flex flex-wrap gap-10'>
        {props.produtos.map((produto)=>{
            return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}
           /> })}
        
        </div>
        )
    }
