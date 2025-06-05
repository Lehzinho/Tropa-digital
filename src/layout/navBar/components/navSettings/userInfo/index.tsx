import userAvatar from "@/assets/images/userAvatar.png";
import * as S from "./styles";
export const UserInfo = () => {
  return (
    <S.Container>
      <img src={userAvatar} alt="user picture avatar" />
      <div>
        <h3>Kaique Steck</h3>
        <p>Administrador</p>
      </div>
    </S.Container>
  );
};
