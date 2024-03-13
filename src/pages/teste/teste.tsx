// pages/contas-a-receber.tsx
import { Conta } from "../../../types/types"; // Importa a interface Conta do arquivo types.ts
import Link from "next/link"; // Importa o componente Link do Next.js

// Dados fictícios de contas a receber
const contasReceber: Conta[] = [
  { id: 1, descricao: "Salário", valor: 3000 },
  { id: 2, descricao: "Venda de produto", valor: 500 },
];

export default function ContasAReceber() {
  return (
    <div>
      <h1>Contas a Receber</h1>
      <ul>
        {/* Mapeia as contas a receber e renderiza cada uma como um item de lista */}
        {contasReceber.map((conta) => (
          <li key={conta.id}>
            {/* Exibe o nome da conta e seu valor */}
            {conta.descricao} - R$ {conta.valor}

            {/* Adiciona um link para detalhes da conta (opcional) */}
            <Link href={`/contas-a-receber/${conta.id}`}>
              <a>Detalhes</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}