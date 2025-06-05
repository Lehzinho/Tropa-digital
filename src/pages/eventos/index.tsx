import { Pagination } from "./pagination";
import { Search } from "./search";
import { Table } from "./table";
import { NewEntryModal } from "./newEntryModal";
import * as S from "./styles";

export const Eventos = () => {
  return (
    <S.Container>
      <NewEntryModal />
      <S.ContentWrapper>
        <Search />
        <Table />
        <Pagination />
      </S.ContentWrapper>
    </S.Container>
  );
};
