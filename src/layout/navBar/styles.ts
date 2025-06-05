import styled from "styled-components";

export const Container = styled.div`
  grid-area: nav;
  display: grid;
  grid-template-rows: 85px auto;
  background-color: ${({ theme }) => theme["background-white1"]};
  .user {
    height: 42px;
    width: 100%;
    margin-bottom: 5px;
    opacity: 10%;
    background-color: blue;
  }
  .button {
    width: 100%;
    height: 35px;
    background-color: red;
    opacity: 10%;
    margin-bottom: 5px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 15px;

  span {
    text-transform: uppercase;
    font-size: 0.5625rem;
    line-height: 15px;
    letter-spacing: 12%;
    font-weight: 700;
    color: ${({ theme }) => theme["text-color-gray"]};
    margin: 0 10px;
  }

  .divider {
    width: 160px;
    height: 1px;
    background-color: #000000;
    opacity: 10%;
    margin: auto auto 8px;
  }
`;

export const SettingsContainer = styled.div`
  height: 182px;
  padding: 30px 15px;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 7px;

  height: auto;
`;
