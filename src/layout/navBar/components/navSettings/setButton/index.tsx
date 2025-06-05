import type {
  ButtonHTMLAttributes,
  FC,
  FunctionComponent,
  SVGProps,
} from "react";
import * as S from "./styles";

interface SetButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
}

export const SetButton: FC<SetButton> = ({ Icon, text, ...props }) => {
  return (
    <S.SetButton {...props}>
      <Icon />
      {text}
    </S.SetButton>
  );
};
