import styled from "@emotion/styled";

interface Props {
  message?: string;
}

const NoDataStyled = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  color: gray;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

const NoData = ({ message }: Props) => {
  return <NoDataStyled>{message ? message : "No data"}</NoDataStyled>;
};

export default NoData;
