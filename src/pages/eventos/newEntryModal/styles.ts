import styled from "styled-components";

type ContainerProps = {
  $modalActive: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  display: ${({ $modalActive }) => ($modalActive ? "grid" : "none")};
  grid-template-columns: 210px auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;

  .contentWrapper {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme["background-white1"]};
  padding: 20px;
  border-radius: 15px;
  h3 {
    color: ${({ theme }) => theme["main-color"]};
    margin-bottom: 20px;
  }
`;

export const CloseModal = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  padding: 5px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme["main-color"]};
  color: ${({ theme }) => theme["background-white1"]};
  position: absolute;
  transform: translate(50%, -50%);
  top: 0;
  right: 0;
`;
