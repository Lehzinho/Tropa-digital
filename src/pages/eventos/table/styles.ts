import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: 1px solid #cc62371a;
      th {
        padding: 20px 12px;

        font-size: 13px;
        font-weight: 500;
        color: ${({ theme }) => theme["main-color"]};
        text-align: left;
        width: 22%;
      }

      th:last-of-type {
        text-align: center;
      }
    }
  }

  tbody {
    color: ${({ theme }) => theme["text-color2"]};
    tr {
      border-bottom: 1px solid #cc62371a;
      td {
        padding: 20px 14.5px;
        text-align: left;
        font-size: 12px;
      }

      td:last-of-type {
        position: relative;
        text-align: center;
      }
    }
  }
`;
