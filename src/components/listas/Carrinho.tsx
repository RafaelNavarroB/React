import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";

interface CarrinhoProps {
    itens: ItemCarrinho[];
}

export default function Carrinho(props: CarrinhoProps) {
    const total =props.itens
    return (
        <div className="flex flex-col border border-white rounded-md overflow-hidden w-4/5">
            <div className="bg-zinc-800 text-3xl p-3 text-white">
                <span>Carrinho</span>
            </div>
            <div className="p-5 flex gap-5">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio/>

                ) : (
                    props.itens.map((item, i) => (
                        <CarrinhoItem key={i} {...item} />
                    ))
                )}
            </div>
        </div>
    );
}
