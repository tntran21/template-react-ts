import { MouseEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { StyledProductContent, StyledTitle } from "./styles";

import ProductForm from "@/components/organisms/ProductForm";
import { ProductDto } from "@/core/dto/productDto";
import ProductList from "@/components/organisms/ProductList";
import { createProduct, getProductsList } from "@/services/product.service";
import { clearEmptyProperties } from "@/core/utils/commonUtil";
import { TFormError } from "@/core/interfaces";

function ProductPage() {
  const [product, setProduct] = useState<ProductDto>(new ProductDto());
  const [errors, setErrors] = useState<TFormError<ProductDto>>({});
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [modeForm, setModeForm] = useState<"readonly" | "edit">("readonly");

  // handle get products list
  const { data: productsList = [], refetch: refetchProductList } = useQuery<
    ProductDto[],
    Error
  >(["products"], getProductsList);

  /**
   * Validate create form
   * @returns errors
   */
  const onValidateCreateForm = () => {
    const { name, price } = product;
    const errors: TFormError<ProductDto> = {};

    if (!name) {
      errors.name = { type: 1, message: "Name is required" };
    }

    if (!price) {
      errors.price = { type: 1, message: "Price is required" };
    }

    return errors;
  };

  /**
   * Handle create new product
   * @param evt : event button
   * @returns void
   */
  const handleCreate = async (
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    evt.preventDefault();
    const errorValid = onValidateCreateForm();
    setErrors(errorValid);

    if (Object.keys(errorValid).length > 0) return;
    setApiLoading(true);
    const payload = clearEmptyProperties(product) as ProductDto;

    await createProduct(payload);
    // Reset form
    setProduct(new ProductDto());
    await refetchProductList();
    setApiLoading(false);
  };

  const handleRowSelect = (product: ProductDto) => {
    console.log("run select: ", product);
    setProduct(product);
  };

  return (
    <StyledProductContent>
      <div className="product-list">
        <StyledTitle>List products</StyledTitle>
        <ProductList data={productsList} onRowSelect={handleRowSelect} />
      </div>
      <div className="product-content">
        <StyledTitle>Create Product</StyledTitle>
        <ProductForm
          product={product}
          mode={modeForm}
          setProduct={setProduct}
          onSubmit={handleCreate}
          errors={errors}
          loading={apiLoading}
        />
      </div>
    </StyledProductContent>
  );
}

export default ProductPage;
