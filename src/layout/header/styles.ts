import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  padding: 30px;
  p {
    font-size: 16px;
    margin-bottom: 13px;
    color: ${({ theme }) => theme["text-color-black"]};
    font-weight: bold;
    span {
      font-weight: normal;
      opacity: 60%;
    }
  }
  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme["main-color"]};
    opacity: 90%;
  }
`;
