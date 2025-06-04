import { Input } from "../../components/inputs";
import * as S from "./styles";
import Logo from "../../assets/images/logo.svg?react";
import Monitoring from "../../assets/images/monitoring.png";
import { Button } from "../../components/button";

export const Login = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LoginContainer>
          <Logo className="logo" />
          <div>
            <h1>Bem-vindo de volta</h1>
            <p>Entre com sua conta para acessar o painel.</p>
          </div>
          <div>
            <Input
              placeholder="seunome@seuservidor.com"
              label="E-mail"
              type="email"
            />
            <Input placeholder="Digite aqui" label="Senha" type="password" />
            <Button />
          </div>
        </S.LoginContainer>
        <S.ImageContainer>
          <img src={Monitoring} />
        </S.ImageContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};
