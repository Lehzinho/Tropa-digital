import styled from "styled-components";

type containerProps = {
  $showMenu: boolean;
};

export const Container = styled.div<containerProps>`
  min-width: 123px;
  min-height: 105px;
  background-color: ${({ theme }) => theme["background-white1"]};

  opacity: ${({ $showMenu }) => ($showMenu ? 1 : 0)};
  pointer-events: ${({ $showMenu }) => ($showMenu ? "auto" : "none")};
  transform: translateY(${({ $showMenu }) => ($showMenu ? "5px" : "0")});
  transition: all 0.2s ease;
  position: absolute;

  border-radius: 15px;
  border: 1px solid lightgray;
  position: absolute;
  right: 70%;
  top: 30%;
  div:nth-child(2) {
    border-top: 1px solid #0000001a;
    border-bottom: 1px solid #0000001a;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0 20px;
`;
