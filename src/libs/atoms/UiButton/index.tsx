import React from "react";
import { ButtonLoading, ButtonStyled } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  primary?: boolean;
}

/**
 * ## UI Button
 * @param props props of Button
 * @returns
 */
const UiButton: React.FC<ButtonProps> = (props) => {
  const { label, loading = false, primary = true, children, ...rest } = props;

  return (
    <>
      <ButtonStyled
        {...rest}
        className={`ui-button ${props?.className ?? ""}`}
        primary={primary}
        loading={loading.toString()}
      >
        {label ?? children}
        {loading && <ButtonLoading />}
      </ButtonStyled>
    </>
  );
};

export default UiButton;
