import { useTeamContext } from "@/context/TeamContext";
import * as S from "./styles";
import { TableRow } from "./tableRow";

export const Table = () => {
  const { team } = useTeamContext();
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
        {team.map((item, key) => (
          <TableRow key={key} {...item} />
        ))}
      </tbody>
    </S.Table>
  );
};
