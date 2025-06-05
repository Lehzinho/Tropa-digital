import type { FC, FunctionComponent, SVGProps } from "react";
import { type NavLinkProps } from "react-router-dom";
import * as S from "./styles";

interface NavButtonsProps extends NavLinkProps {
  text: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  isSelected: boolean;
}

export const NavButtons: FC<NavButtonsProps> = ({
  text,
  Icon,
  isSelected = false,
  ...props
}) => {
  return (
    <S.NavButton $isSelected={isSelected} {...props}>
      <Icon />
      {text}
    </S.NavButton>
  );
};
