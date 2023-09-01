import styled from "@emotion/styled";

/**
 * Generates a progress router component based on the provided progress value.
 *
 * @param {number} progress - The progress value to determine the width of the progress bar.
 * @return {JSX.Element} - The generated progress router component.
 */
const ProgressRouter = ({ progress }: { progress: number }) => {
  const progressBarStyles = {
    width: `${progress}%`,
  };

  return <StyledRouterLoading style={progressBarStyles}></StyledRouterLoading>;
};

const StyledRouterLoading = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5px;
  background: #4caf50;
  transition: width 0.3s;
`;

export default ProgressRouter;
