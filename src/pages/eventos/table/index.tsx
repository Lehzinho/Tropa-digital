import * as S from "./styles";
import { TableRow } from "./tableRow";

const tableData = [
  {
    nome: "Clube do Laço Coração Pantaneiro",
    total: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
  {
    nome: "Clube do Laço Coração Pantaneiro",
    total: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
  {
    nome: "Clube do Laço Coração Pantaneiro",
    total: 10,
    status: "Ativo",
    data: "09 a 12 de Junho",
  },
];

export const Table = () => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Nome do evento</th>
          <th>Total de equipes</th>
          <th>Status</th>
          <th>Data</th>
          <th style={{ width: 40 }}></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, key) => (
          <TableRow key={key} {...item} />
        ))}
      </tbody>
    </S.Table>
  );
};
