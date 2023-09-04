import { useRouteError } from "react-router-dom";
import styled from "@emotion/styled";
import { TAnyType } from "@/core/interfaces";

function ErrorPage() {
  const error: TAnyType = useRouteError();

  return (
    <StyledErrorPage id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledErrorPage>
  );
}

const StyledErrorPage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 1.5em;
  color: #999;
`;

export default ErrorPage;
