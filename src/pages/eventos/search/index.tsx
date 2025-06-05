import { Button } from "@/components/button";
import * as S from "./styles";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export const Search = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <IoSearch />
        <input placeholder="Buscar eventos" />
      </S.InputContainer>
      <Button text="Inserir novo" Icon={FaPlus} style={{ width: 124 }} />
    </S.Container>
  );
};
