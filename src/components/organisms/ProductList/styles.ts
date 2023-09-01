import styled from "@emotion/styled";

const ProductAvatarStyled = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`;

const ProductItemContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const ItemStyled = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${ProductAvatarStyled} {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const ProductListStyled = styled.div`
  /* height: 100%;
  overflow-y: auto; */
`;

export { ProductListStyled, ProductAvatarStyled, ItemStyled, ProductItemContentStyled };
