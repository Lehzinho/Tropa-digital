import { SetButton } from "@/components/setButton";
import * as S from "./styles";
import Eye from "@/assets/icons/eye.svg?react";
import TrashCan from "@/assets/icons/trashCan.svg?react";
import Pensil from "@/assets/icons/pensil.svg?react";

type SettingMenuProps = {
  showMenu: boolean;
};

export const SettingMenu = ({ showMenu }: SettingMenuProps) => {
  return (
    <S.Container $showMenu={showMenu}>
      <S.ButtonWrapper>
        <SetButton Icon={Eye} text="Visualizar" />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <SetButton Icon={Pensil} text="Editar" />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <SetButton Icon={TrashCan} text="Remover" style={{ color: "red" }} />
      </S.ButtonWrapper>
    </S.Container>
  );
};
