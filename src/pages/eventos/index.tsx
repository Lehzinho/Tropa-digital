import { Pagination } from "./pagination";
import { Search } from "./search";
import { Table } from "./table";
import * as S from "./styles";

export const Eventos = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <Search />
        <Table />
        <Pagination />
      </S.ContentWrapper>
    </S.Container>
  );
};
