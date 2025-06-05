import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  margin-left: auto;
  background-color: ${({ theme }) => theme["background-white2"]};
  padding: 0 10px;
  border-radius: 33px;
  input {
    padding: 10px;
    background-color: transparent;
    border: none;
    &::placeholder {
      color: #00000033;
    }
  }
  svg {
    color: #00000033;
  }
`;
