import styled from "styled-components";

export const Status = styled.div`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 99px;
  margin-right: 3px;
  background-color: #4def00;
`;

export const Menu = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 3.5px;
    height: 3.5px;
    border-radius: 99px;
    background-color: ${({ theme }) => theme["main-color"]};
    box-shadow: 0 7px ${({ theme }) => theme["main-color"]},
      0 -7px ${({ theme }) => theme["main-color"]};
  }
`;
