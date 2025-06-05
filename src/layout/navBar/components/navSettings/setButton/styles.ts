import styled from "styled-components";

export const SetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme["text-color-black"]};
  background-color: ${({ theme }) => theme["background-white2"]};

  width: 100%;
  height: 35px;

  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;
