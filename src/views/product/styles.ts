import styled from "@emotion/styled";

const StyledProductContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .product-list {
    width: 60%;
    max-height: calc(100vh - 141px);
    overflow-y: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .product-content {
    width: 50%;
    .product-form {
      max-width: 35rem;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export { StyledProductContent, StyledTitle };
