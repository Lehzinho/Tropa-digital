import { Input } from "../../components/inputs";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.Container>
      <Input
        placeholder="seunome@seuservidor.com"
        label="E-mail"
        type="email"
      />
      <Input placeholder="Digite aqui" label="Senha" type="password" />
    </S.Container>
  );
};
