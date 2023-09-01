import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface ButtonStyledProps {
  loading: string;
  primary?: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: rgb(var(--btn-primary));
  color: rgb(var(--color-white));
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  pointer-events: ${(props) => (props.loading === "true" ? "none" : "auto")};
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    background-color: rgb(var(--btn-primary), 0.8);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  ${(props) =>
    !props.primary &&
    `
    background-color: rgb(var(--btn-secondary));
    &:hover {
      background-color: rgb(var(--btn-secondary), 0.8);
    }
  `}
  ${(props) =>
    props.loading === "true" &&
    `
    // background-color: rgb(var(--color-gray-02));
    opacity: 0.6;
  `}
`;

const ButtonLoading = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgb(var(--color-white));
  border-top-color: transparent;

  animation: ${keyframes`
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  `} 0.8s linear infinite;
`;

export { ButtonStyled, ButtonLoading };
