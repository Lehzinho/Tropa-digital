import * as S from "./styles";
import Logo from "@/assets/images/logo.svg?react";
import { NavBar } from "./components/navBar";
import { NavSettings } from "./components/navSettings";

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
        <NavSettings />
      </S.NavContainer>
    </S.Container>
  );
};
