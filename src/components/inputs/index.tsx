import { useState, type ButtonHTMLAttributes, type FC } from "react";
import * as S from "./styles";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type InputProps = {
  placeholder: string;
  label: string;
  type?: string;
};

interface EyeIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const EyeIcon: FC<EyeIconProps> = ({ active = true, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      {active ? <IoEyeOffOutline size={26} /> : <IoEyeOutline size={26} />}
    </button>
  );
};

export const Input = ({ placeholder, label, type = "text" }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  console.log(showPassword);
  return (
    <S.Container>
      <S.Label htmlFor={label}>{label}</S.Label>
      <div className="inputContainer">
        <S.Input type={type} id={label} placeholder={placeholder} />
        {type === "password" && (
          <EyeIcon
            active={showPassword}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
    </S.Container>
  );
};
