import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 11px;
      line-height: 15px;
      color: ${({ theme }) => theme["text-color-black"]};
      opacity: 50%;
    }
  }
`;
