import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme["main-color"]};
  border: none;
  padding: 0.7813rem 15px;
  border-radius: 100px;

  color: ${({ theme }) => theme["background-white1"]};
  font-size: 0.8125rem;
`;
