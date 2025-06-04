import type { ButtonHTMLAttributes, FC } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return <S.Container {...props}>{text}</S.Container>;
};
