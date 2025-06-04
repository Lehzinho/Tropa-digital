import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme["background-white2"]};
`;

export const ContentWrapper = styled.div`
  flex: 1;
  height: 100%;
  max-height: 29.875rem;
  max-width: 47.2813rem;

  display: grid;
  grid-template-columns: 1fr;

  border-radius: 20px;
  background-color: ${({ theme }) => theme["background-white1"]};

  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 18.6875rem;

  margin: 0 auto;

  > svg {
    margin-bottom: 35px;
  }

  > div:nth-child(2) {
    margin-bottom: 35px;

    h1 {
      font-size: 1.625rem;
      color: ${({ theme }) => theme["main-color"]};
    }
    p {
      color: ${({ theme }) => theme["text-color"]};
      font-size: 0.8125rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 355.5px;
  height: 100%;

  display: none;
  margin-left: auto;
  border-radius: 20px;

  background-color: ${({ theme }) => theme["main-color"]};

  > img {
    position: absolute;
    bottom: 0;
    right: 40px;
  }

  @media (min-width: 800px) {
    display: block;
  }
`;
