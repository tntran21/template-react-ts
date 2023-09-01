import React from "react";
import { StyledUiLabel } from "./styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  required?: boolean;
}

const UiLabel = (props: LabelProps) => {
  const { label, required = false, children, ...rest } = props;

  return (
    <>
      <StyledUiLabel {...rest} className={`ui-label ${props?.className ?? ""}`}>
        {required && <span className="required">*</span>}
        {label ?? children}
      </StyledUiLabel>
    </>
  );
};

export default UiLabel;
