import { Button } from "@/components/button";
import * as S from "./styles";
import { useState } from "react";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (direction: number) => {
    if (direction == 1) {
      setPage((prev) => {
        if (prev === 1) {
          return 3;
        }
        return (prev -= 1);
      });
    } else {
      setPage((prev) => {
        if (prev === 3) {
          return 1;
        }
        return (prev += 1);
      });
    }
  };

  return (
    <S.Container>
      <Button
        color="white"
        text="Anterior"
        onClick={() => handleChangePage(1)}
      />
      <Button color={page === 1 ? "default" : "white"} text="1" />
      <Button color={page === 2 ? "default" : "white"} text="2" />
      <Button color={page === 3 ? "default" : "white"} text="3" />
      <Button
        color="white"
        text="Próxima"
        onClick={() => handleChangePage(-1)}
      />
    </S.Container>
  );
};
