import { Button } from "@/components/button";
import * as S from "./styles";
import { useState } from "react";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (direction: string) => {
    if (direction == "prev") {
      setPage((prev) => {
        if (prev === 1) {
          return 3;
        }
        return (prev -= 1);
      });
    } else if (direction == "next") {
      setPage((prev) => {
        if (prev === 3) {
          return 1;
        }
        return (prev += 1);
      });
    } else {
      setPage(Number(direction));
    }
  };

  return (
    <S.Container>
      <Button
        color="white"
        text="Anterior"
        onClick={() => handleChangePage("prev")}
      />
      <Button
        color={page === 1 ? "default" : "white"}
        text="1"
        onClick={() => handleChangePage("1")}
      />
      <Button
        color={page === 2 ? "default" : "white"}
        text="2"
        onClick={() => handleChangePage("2")}
      />
      <Button
        color={page === 3 ? "default" : "white"}
        text="3"
        onClick={() => handleChangePage("3")}
      />
      <Button
        color="white"
        text="Próxima"
        onClick={() => handleChangePage("next")}
      />
    </S.Container>
  );
};
