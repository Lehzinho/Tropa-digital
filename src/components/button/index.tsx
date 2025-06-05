import type { ButtonHTMLAttributes, FC } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "default" | "white";
}

export const Button: FC<ButtonProps> = ({
  text,
  color = "default",
  ...props
}) => {
  return (
    <S.Container $color={color} {...props}>
      {text}
    </S.Container>
  );
};
