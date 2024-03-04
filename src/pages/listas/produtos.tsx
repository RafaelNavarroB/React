import ListaProdutos from "@/constants/produtos";
import Produto from "@/components/listas/ListaProdutos"
import ItemCarrinho from "@/model/ItemCarrinho";
import { useState } from "react";
import ModeloProduto from "@/model/produto";
import Carrinho from "@/components/listas/Carrinho";

export default function PaginaProdutos(){
    const [itens,setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto:ModeloProduto){
        const itemAtual =itens.find((item)=> item.produto.id === produto.id) ??{quantidade:0,produto }
        const novoItem ={...itemAtual,quantidade: itemAtual.quantidade+1 }
        const outrosItens = itens.filter((item) =>item.produto.id !== produto.id)
        setItens([...outrosItens,novoItem])
    }
    
    return(	

        <div className={`
         flex flex-col justify-center items-center h-screen gap-10
        `}>
            {/* <ProdutoItem produto = {produto}/> 
            linhaACIMA PARA EXIBIR UM PRODUTO SÓ */}
            <Carrinho itens={itens}/>
            <Produto produtos={ListaProdutos} comprar={adicionarProduto}/>



        </div>
    )
}