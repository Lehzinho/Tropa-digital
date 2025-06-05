import type { ButtonHTMLAttributes, FC } from "react";
import * as S from "./styles";
import type { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "default" | "white";
  Icon?: IconType;
}

export const Button: FC<ButtonProps> = ({
  text,
  color = "default",
  Icon,
  ...props
}) => {
  return (
    <S.Container $color={color} {...props}>
      {Icon && <Icon />}
      {text}
    </S.Container>
  );
};
