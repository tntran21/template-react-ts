import { useNavigate } from "react-router-dom";
import { useCommon } from "@/core/hooks/useCommon";
import { useUserStore } from "@/stores/client/userStore";
import UiButton from "@/libs/atoms/UiButton";
import styled from "@emotion/styled";

function LoginPage() {
  const userStore = useUserStore((state) => state);
  const navigate = useNavigate();
  const { query } = useCommon();

  const onLogin = () => {
    userStore.updateUserName("test");
    const redirectFrom = query.get("redirectFrom") ?? "/";
    navigate(redirectFrom);
  };
  return (
    <LoginStyled>
      <div className="login-ttl">Login Page</div>
      <UiButton onClick={() => onLogin()}>login</UiButton>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  .login-ttl {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default LoginPage;
