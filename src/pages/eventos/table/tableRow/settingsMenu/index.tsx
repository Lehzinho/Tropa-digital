import { SetButton } from "@/components/setButton";
import * as S from "./styles";
import Eye from "@/assets/icons/eye.svg?react";
import TrashCan from "@/assets/icons/trashCan.svg?react";
import Pensil from "@/assets/icons/pensil.svg?react";
import { useTeamContext } from "@/context/TeamContext";

type SettingMenuProps = {
  showMenu: boolean;
  id?: string;
};

export const SettingMenu = ({ showMenu, id }: SettingMenuProps) => {
  const { handleRemoveTeam, handleSelectTeam, handleOpenModal } =
    useTeamContext();

  const hadleEditTeam = () => {
    handleOpenModal(true);
    handleSelectTeam(id as string);
  };

  return (
    <S.Container $showMenu={showMenu}>
      <S.ButtonWrapper>
        <SetButton Icon={Eye} text="Visualizar" onClick={hadleEditTeam} />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <SetButton Icon={Pensil} text="Editar" onClick={hadleEditTeam} />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <SetButton
          Icon={TrashCan}
          text="Remover"
          style={{ color: "red" }}
          onClick={() => handleRemoveTeam(id as string)}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};
