import {
  useState,
  type ButtonHTMLAttributes,
  type FC,
  type InputHTMLAttributes,
} from "react";
import * as S from "./styles";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  error?: string;
}

interface EyeIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const EyeIcon: FC<EyeIconProps> = ({ active = true, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      {active ? <IoEyeOutline size={26} /> : <IoEyeOffOutline size={26} />}
    </button>
  );
};

export const Input = ({
  label,
  error,
  type = "text",
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <S.Container>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.InputContainer className="inputContainer">
        <S.Input type={showPassword ? type : "text"} id={label} {...props} />
        {type === "password" && (
          <EyeIcon
            active={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </S.InputContainer>
      {error && <p>{error}</p>}
    </S.Container>
  );
};
