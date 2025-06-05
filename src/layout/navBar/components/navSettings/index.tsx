import { SetButton } from "./setButton";
import * as S from "./styles";
import { UserInfo } from "./userInfo";
import User from "@/assets/icons/user.svg?react";
import Logout from "@/assets/icons/logout.svg?react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

export const NavSettings = () => {
  const { handleAuthentication } = useAuthContext();
  const navigate = useNavigate();

  const handleCheckout = (link: string, replace: boolean) => {
    if (replace) handleAuthentication(false);
    navigate(`/${link}`, { replace: replace });
  };
  return (
    <S.SettingsContainer>
      <UserInfo />
      <SetButton
        Icon={User}
        text="Alterar dados"
        onClick={() => handleCheckout("dados", false)}
      />
      <SetButton
        Icon={Logout}
        text="Sair"
        onClick={() => handleCheckout("login", true)}
      />
    </S.SettingsContainer>
  );
};
