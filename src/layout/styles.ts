import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav header"
    "nav main"
    "nav main";
  grid-template-columns: 210px auto;
  grid-template-rows: 119px auto auto;
`;

export const Main = styled.main`
  grid-area: main;
`;
