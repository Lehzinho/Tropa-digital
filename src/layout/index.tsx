/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { Menu } from "./navBar";

import * as S from "./styles";
import { Header } from "./header";

export const DefaultLayout = () => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <S.Container>
      <Header />
      <Menu />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};
