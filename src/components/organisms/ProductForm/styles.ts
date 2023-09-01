import styled from "@emotion/styled";

const StyledProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }

  & > div input {
    font: inherit;
    padding: 0.35rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  & > div input:focus {
    outline: none;
    border-color: #4f005f;
  }

  & > div input.invalid {
    border-color: red;
    background-color: #ffd7d7;
  }

  & > div input.valid {
    border-color: green;
    background-color: #c7ffd7;
  }

  & > div input:disabled {
    background-color: #ccc;
  }

  & > div p {
    color: red;
    margin: 0.25rem 0;
    font-size: 0.75rem;
  }
`;

export default StyledProductForm;
