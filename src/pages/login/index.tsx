/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "../../components/inputs";
import * as S from "./styles";
import Logo from "../../assets/images/logo.svg?react";
import Monitoring from "../../assets/images/monitoring.png";
import { Button } from "../../components/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const signInForm = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .regex(
      passwordRegex,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});

type SignInForm = z.infer<typeof signInForm>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const handleSignIn = async (data: SignInForm) => {};

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LoginContainer>
          <Logo className="logo" />
          <div>
            <h1>Bem-vindo de volta</h1>
            <p>Entre com sua conta para acessar o painel.</p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              placeholder="seunome@seuservidor.com"
              label="E-mail"
              type="email"
              {...register("email")}
            />
            <Input placeholder="Digite aqui" label="Senha" type="password" />
            <Button text="Enviar" disabled={isSubmitting} />
          </form>
        </S.LoginContainer>
        <S.ImageContainer>
          <img src={Monitoring} />
        </S.ImageContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};
