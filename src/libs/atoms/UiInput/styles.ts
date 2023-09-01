import styled from "@emotion/styled";

/*
 * write styles here
 * style for UiInput
 */
const UiInputStyled = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #000;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: #000;
  }
`;

const UiInputWrapperStyled = styled.div`
  width: 100%;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }

  .error {
    left: 0;
    font-size: 12px;
    color: #ff0000;
  }
`;

export { UiInputStyled, UiInputWrapperStyled };
