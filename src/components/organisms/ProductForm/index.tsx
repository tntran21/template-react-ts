import { MouseEvent, SetStateAction } from "react";
import StyledProductForm from "./styles";

import { ProductDto } from "@/core/dto/productDto";
import UiButton from "@/libs/atoms/UiButton";
import UiLabel from "@/libs/atoms/UiLabel";
import UiInput from "@/libs/atoms/UiInput";
import { IMessageError } from "@/core/interfaces";

type TFormMode = "readonly" | "edit";

interface Props {
  product: ProductDto;
  mode?: TFormMode;
  setProduct: React.Dispatch<SetStateAction<ProductDto>>;
  loading?: boolean;
  onSubmit: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  errors?: {
    [key in keyof ProductDto]?: IMessageError;
  };
}

/**
 * ## ProductForm
 * Form for adding and editing products
 */
const ProductForm = ({
  product,
  setProduct,
  errors,
  mode = "readonly",
  loading = false,
  onSubmit,
}: Props) => {
  /**
   * ### Updates the value of a specific key in the ProductDto object and sets the new value in the state.
   *
   * @param {type} value - The new value to be set for the specified key.
   * @param {type} key - The key of the ProductDto object whose value needs to be updated.
   */
  const onChangeValue = (
    value: ProductDto[keyof ProductDto],
    key: keyof ProductDto
  ) => {
    setProduct((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <StyledProductForm className="product-form">
      <div>
        <UiLabel htmlFor="name" required={mode === "edit"}>
          Name:
        </UiLabel>
        <UiInput
          type="text"
          id="name"
          disabled={mode === "readonly"}
          value={product.name}
          error={errors?.name?.message}
          onChange={(evt) => onChangeValue(evt.target.value, "name")}
        />
      </div>

      <div>
        <UiLabel htmlFor="price" required={mode === "edit"}>
          Price:
        </UiLabel>
        <UiInput
          type="number"
          id="price"
          disabled={mode === "readonly"}
          value={product.price}
          error={errors?.price?.message}
          onChange={(evt) => onChangeValue(evt.target.value, "price")}
        />
      </div>

      <div>
        <UiLabel htmlFor="description">Description: </UiLabel>
        <textarea
          id="description"
          disabled={mode === "readonly"}
          value={product.description}
          onChange={(evt) => onChangeValue(evt.target.value, "description")}
        />
      </div>

      {mode === "edit" && (
        <div>
          <UiButton
            label="Submit"
            type="submit"
            loading={loading}
            onClick={(evt) => onSubmit(evt)}
          />
        </div>
      )}
    </StyledProductForm>
  );
};

export default ProductForm;
