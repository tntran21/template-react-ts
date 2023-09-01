import { useNavigate } from "react-router-dom";
import { useCommon } from "@/core/hooks/useCommon";
import { useUserStore } from "@/stores/client/userStore";

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
    <>
      <div>Login</div>
      <button onClick={() => onLogin()}>login</button>
    </>
  );
}

export default LoginPage;
