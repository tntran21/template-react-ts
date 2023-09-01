import { ProductDto } from "@/core/dto/productDto";
import { ItemStyled, ProductAvatarStyled, ProductItemContentStyled, ProductListStyled } from "./styles";

interface IProps {
  data?: ProductDto[];
  onRowSelect?: (product: ProductDto) => void;
}

interface IIemProps {
  product: ProductDto;
  onRowSelect?: (product: ProductDto) => void;
}

/**
 * ### ProductItem: Item of the product list
 *
 * @return {void}
 */
const ProductItem = ({ product, onRowSelect }: IIemProps) => {
  /**
   * Handles the click event on an item. Sends the product to the parent component.
   * @return {void}
   */
  const handleClickItem = () => {
    onRowSelect && onRowSelect(product);
  };

  return (
    <ItemStyled onClick={() => handleClickItem()}>
      <ProductAvatarStyled src={product?.image ?? undefined} alt={product.name} />
      <ProductItemContentStyled>
        <div>
          <div>{product.name}</div>
          <div>{product.description}</div>
        </div>

        <div>${product.price}</div>
      </ProductItemContentStyled>
    </ItemStyled>
  );
};

/**
 * ### Renders a list of products.
 *
 * @param {Array<object>} data - An array of product objects.
 * @param {Function} onRowSelect - A callback function to handle row selection.
 * @return {JSX.Element} - The rendered product list.
 */
const ProductList = ({ data = [], onRowSelect }: IProps) => {
  return (
    <ProductListStyled>
      {data.map((item) => (
        <ProductItem key={item.id} product={item} onRowSelect={onRowSelect} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
