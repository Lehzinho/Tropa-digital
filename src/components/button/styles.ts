import styled from "styled-components";

type ContainerProps = {
  $color: string;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  width: 100%;
  background-color: ${({ theme, $color }) =>
    $color === "default" ? theme["main-color"] : theme["background-white2"]};
  border: none;
  padding: 0.7813rem 15px;
  border-radius: 100px;
  cursor: pointer;

  color: ${({ theme, $color }) =>
    $color === "default"
      ? theme["background-white1"]
      : theme["text-color-black"]};

  &:hover {
    background-color: ${({ theme, $color }) =>
      $color === "white" && theme["main-color"]};

    color: ${({ theme, $color }) =>
      $color === "white" && theme["background-white1"]};
  }
  font-size: 0.8125rem;
`;
