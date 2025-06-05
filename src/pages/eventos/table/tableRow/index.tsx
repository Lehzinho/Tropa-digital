import { useState } from "react";
import { SettingMenu } from "./settingsMenu";
import * as S from "./styles";

type TableRowProps = {
  nome: string;
  total: number;
  status: string;
  data: string;
};

export const TableRow = ({ data, nome, status, total }: TableRowProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (activator: boolean) => {
    setShowMenu(activator);
  };

  return (
    <tr>
      <td>{nome}</td>
      <td>{total}</td>
      <td>
        <p>
          <S.Status /> {status}
        </p>
      </td>
      <td>{data}</td>
      <td
        onMouseEnter={() => handleShowMenu(true)}
        onMouseLeave={() => handleShowMenu(false)}
      >
        <SettingMenu showMenu={showMenu} />
        <S.Menu>
          <div />
        </S.Menu>
      </td>
    </tr>
  );
};
