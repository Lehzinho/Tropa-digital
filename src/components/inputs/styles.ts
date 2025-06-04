import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  p {
    bottom: -8px;

    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme["warning-color"]};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    background-color: transparent;
    border: none;
    z-index: 10;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  svg {
    stroke: ${({ theme }) => theme["main-color"]};
    fill: ${({ theme }) => theme["main-color"]};
  }
`;

export const Label = styled.label`
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  letter-spacing: 0;

  margin-bottom: 0.3125rem;

  color: ${({ theme }) => theme["main-color"]};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 100px;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme["background-white2"]};
  padding: 0.7813rem 1.25rem;

  font-size: 0.75rem;
`;
