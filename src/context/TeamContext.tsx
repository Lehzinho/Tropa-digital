/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

interface TeamProviderProps {
  children: ReactNode;
}

interface TeamContextData {
  modalActive: boolean;
  team: teamProps[];
  selectedTeam: teamProps | null;
  handleAddTeams: (data: teamProps) => void;
  handleEditTeam: (id: string, data: teamProps) => void;
  handleRemoveTeam: (id: string) => void;
  handleOpenModal: (isOpen: boolean) => void;
  handleSelectTeam: (id: string | null) => void;
}

export type teamProps = {
  id?: string;
  nome: string;
  total: number;
  status: string;
  data: string;
};

const TeamContext = createContext<TeamContextData>({} as TeamContextData);

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<teamProps | null>(null);

  const [team, setTeam] = useState<teamProps[]>([
    {
      id: "1",
      nome: "Clube do Laço Coração Pantaneiro",
      total: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      id: "2",
      nome: "Clube do Laço Coração Pantaneiro",
      total: 10,
      status: "Ativo",
      data: "09 a 12 de Junho",
    },
  ]);

  const handleSelectTeam = (id: string | null) => {
    const tempSelectedTeam = team.find((item) => item.id === id);
    if (tempSelectedTeam) {
      setSelectedTeam(tempSelectedTeam);
    } else {
      setSelectedTeam(null);
    }
  };

  const handleOpenModal = (isOpen: boolean) => {
    setModalActive(isOpen);
  };

  const handleAddTeams = (data: teamProps) => {
    console.log(data);
    setTeam((prev) => [...prev, data]);
  };

  const handleRemoveTeam = (id: string) => {
    setTeam((prev) => {
      const teams = prev.filter((teamId) => teamId.id !== id);
      return teams;
    });
  };

  const handleEditTeam = (id: string, data: teamProps) => {
    setTeam((prev) =>
      prev.map((team) =>
        team.id === id
          ? { ...team, nome: data.nome, data: data.data, total: data.total }
          : team
      )
    );
    setSelectedTeam(null);
  };

  return (
    <TeamContext.Provider
      value={{
        team,
        modalActive,
        selectedTeam,
        handleAddTeams,
        handleEditTeam,
        handleRemoveTeam,
        handleOpenModal,
        handleSelectTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => useContext(TeamContext);
