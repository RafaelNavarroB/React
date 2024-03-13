// types/types.ts

// Interface para representar uma conta
export interface Conta {
    id: number; // Identificador único da conta
    descricao: string; // Descrição da conta
    valor: number; // Valor da conta
  }
  
  // Enumeração para representar o tipo de conta (a pagar ou a receber)
  export enum TipoConta {
    Pagar = "pagar",
    Receber = "receber",
  }