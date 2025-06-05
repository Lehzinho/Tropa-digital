import { useLocation } from "react-router-dom";
import Calendar from "../../../../assets/icons/calendar.svg?react";
import Dash from "../../../../assets/icons/dash.svg?react";
import Inscricoes from "../../../../assets/icons/inscricoes.svg?react";
import Teams from "../../../../assets/icons/teams.svg?react";
import { NavButtons } from "../navButtons";
import * as S from "./styles";

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <S.Nav>
      <NavButtons
        isSelected={pathname === "/"}
        to={"/"}
        Icon={Dash}
        text="Dashboard"
      />
      <NavButtons
        isSelected={pathname === "/eventos"}
        to={"/eventos"}
        text="Eventos"
        Icon={Calendar}
      />
      <NavButtons
        isSelected={pathname === "/equipes"}
        to={"/equipes"}
        text="Equipes"
        Icon={Teams}
      />
      <NavButtons
        isSelected={pathname === "/inscricoes"}
        to={"inscricoes"}
        text="Inscriçoes"
        Icon={Inscricoes}
      />
    </S.Nav>
  );
};
