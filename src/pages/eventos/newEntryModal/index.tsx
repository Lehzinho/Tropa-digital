import { Input } from "@/components/inputs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { IoCloseSharp } from "react-icons/io5";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTeamContext, type teamProps } from "@/context/TeamContext";
import { geraIdUnico } from "@/utils/geraIdUnico";

const EnrollForm = z.object({
  evento: z.string().min(1, "Entre o nome do evento."),
  total: z.number().min(1, "Entre o nome do evento."),
  dataDe: z.number().min(1, "Entre o nome da equipe"),
  dataA: z.number().min(1, "Entre o nome da equipe"),
  dataMez: z.string().min(1, "Entre o nome da equipe"),
});

type EnrollForm = z.infer<typeof EnrollForm>;

export const NewEntryModal = () => {
  const {
    handleAddTeams,
    handleOpenModal,
    modalActive,
    selectedTeam,
    handleEditTeam,
  } = useTeamContext();
  const match = selectedTeam?.data.match(/^(\d+)\s+a\s+(\d+)\s+de\s+(.+)$/);
  let dataDe = 0;
  let dataA = 0;
  let dataMez = "";

  if (match) {
    dataDe = Number(match[1]); // "2"
    dataA = Number(match[2]); // "2"
    dataMez = match[3]; // "Janeiro"

    console.log({ dataDe, dataA, dataMez });
  } else {
    console.log("Formato inválido");
  }
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EnrollForm>({
    resolver: zodResolver(EnrollForm),
    values: {
      evento: selectedTeam?.nome ?? "",
      dataDe: dataDe,
      dataA: dataA,
      dataMez: dataMez,
      total: selectedTeam?.total ?? 0,
    },
  });

  const handleEnrollment = (data: EnrollForm) => {
    const team: teamProps = {
      id: geraIdUnico(),
      nome: data.evento,
      total: Number(data.total),
      status: "Ativo",
      data: `${data.dataDe} a ${data.dataA} de ${data.dataMez}`,
    };

    if (selectedTeam !== null) {
      const editteam = {
        nome: data.evento,
        total: Number(data.total),
        status: "Ativo",
        data: `${data.dataDe} a ${data.dataA} de ${data.dataMez}`,
      };
      handleEditTeam(selectedTeam.id as string, editteam);
    } else {
      handleAddTeams(team);
    }

    handleOpenModal(false);
    console.log(data);
    reset();
  };

  return (
    <S.Container $modalActive={modalActive}>
      <div className="contentWrapper">
        <S.ContentWrapper>
          <S.CloseModal onClick={() => handleOpenModal(false)}>
            <IoCloseSharp />
          </S.CloseModal>
          <h3>Entre os dados da sua equipe</h3>
          <form onSubmit={handleSubmit(handleEnrollment)}>
            <Input
              label="Nome do evento"
              placeholder="Entre o evento"
              {...register("evento")}
              error={errors.evento?.message}
            />
            <Input
              label="Total de Equipes"
              placeholder="Entre a quipe"
              type="number"
              {...register("total", { valueAsNumber: true })}
              error={errors.total?.message}
            />
            <Input
              label="Dia de começo"
              placeholder="Entre o dia de começo"
              type="number"
              {...register("dataDe", { valueAsNumber: true })}
              error={errors.dataDe?.message}
            />
            <Input
              label="Dia de encerramento"
              placeholder="Entre o dia do encerramento"
              type="number"
              {...register("dataA", { valueAsNumber: true })}
              error={errors.dataA?.message}
            />
            <Input
              label="Mez do evento"
              placeholder="Entre o mez"
              {...register("dataMez")}
              error={errors.dataMez?.message}
            />
            <Button
              type="submit"
              text={selectedTeam === null ? "Adicionar" : "Salvar"}
              disabled={isSubmitting}
            />
          </form>
        </S.ContentWrapper>
      </div>
    </S.Container>
  );
};
