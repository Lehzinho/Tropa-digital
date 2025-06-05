import { Input } from "../../components/inputs";
import * as S from "./styles";
import Logo from "../../assets/images/logo.svg?react";
import Monitoring from "../../assets/images/monitoring.png";
import { Button } from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const signInForm = z.object({
  email: z
    .string()
    .min(1, "Digite seu e-mail.")
    .email("Por favor digite um email valido."),

  password: z
    .string()
    .min(1, "Password is required")
    .refine((value) => passwordRegex.test(value), {
      message:
        "A senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
    }),
});

type SignInForm = z.infer<typeof signInForm>;

export const Login = () => {
  const { handleAuthentication } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const handleSignIn = async (data: SignInForm) => {
    // fetch data from db
    console.log(data);

    handleAuthentication(true);
    navigate("/");
  };

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
              error={errors.email?.message}
            />
            <Input
              placeholder="Digite aqui"
              label="Senha"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <Button type="submit" text="Enviar" disabled={isSubmitting} />
          </form>
        </S.LoginContainer>
        <S.ImageContainer>
          <img src={Monitoring} />
        </S.ImageContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};
