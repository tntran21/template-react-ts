import React from "react";
import { UiInputStyled, UiInputWrapperStyled } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

/**
 * ## UI Input
 * @param props props of Input
 * @returns
 */
const UiInput: React.FC<InputProps> = (props) => {
  const { error, ...rest } = props;

  return (
    <UiInputWrapperStyled className={`ui-input ${props?.className ?? ""}`}>
      <UiInputStyled {...rest} />
      {error && <span className="error">{error}</span>}
    </UiInputWrapperStyled>
  );
};

export default UiInput;
