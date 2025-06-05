import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme["background-white2"]};
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["background-white1"]};
`;
