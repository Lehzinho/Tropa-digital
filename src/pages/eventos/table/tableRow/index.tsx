import { useState } from "react";
import { SettingMenu } from "./settingsMenu";
import * as S from "./styles";

type TableRowProps = {
  id?: string;
  nome: string;
  total: number;
  status: string;
  data: string;
};

export const TableRow = ({ data, nome, status, total, id }: TableRowProps) => {
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
        style={{ width: 40 }}
      >
        <SettingMenu id={id} showMenu={showMenu} />
        <S.Menu>
          <div />
        </S.Menu>
      </td>
    </tr>
  );
};
