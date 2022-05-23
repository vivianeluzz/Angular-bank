import { TransferenciaService } from './../transferencia.service';
export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: string;
  data?:string;
}
