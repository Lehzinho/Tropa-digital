import styled from "styled-components";
import { NavLink } from "react-router-dom";

type NavButtonProps = {
  $isSelected: boolean;
};

export const NavButton = styled(NavLink)<NavButtonProps>`
  width: 100%;
  display: flex;
  gap: 10px;

  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme["main-color"] : theme["background-white2"]};

  /** Font styles */
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme["background-white1"] : theme["text-color-black"]};
`;
