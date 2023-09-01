import styled from "@emotion/styled";

const StyledBaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex: 1 1;
  box-sizing: border-box;
  padding: 15px;
`;

export { StyledBaseLayout, StyledMain };
