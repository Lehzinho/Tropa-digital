import * as S from "./styles";
import Logo from "../../assets/images/logo.svg?react";
import { NavBar } from "./components/navBar";

export const Menu = () => {
  return (
    <S.Container>
      <S.LogoContainer className="logoContaier">
        <Logo />
      </S.LogoContainer>
      <S.NavContainer>
        <span>menu</span>
        <div>
          <NavBar />
        </div>
        <div className="divider" />
        <S.SettingsContainer>
          <div className="user"></div>
          <div className="button"></div>
          <div className="button"></div>
        </S.SettingsContainer>
      </S.NavContainer>
    </S.Container>
  );
};
