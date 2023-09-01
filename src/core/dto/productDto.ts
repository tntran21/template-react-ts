interface IProduct {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  image?: string | null;
}

class ProductDto {
  id: string | null;
  name: string;
  price: number;
  description: string;
  image: string | null;

  constructor(product?: IProduct) {
    this.id = product?.id ?? null;
    this.name = product?.name ?? "";
    this.price = product?.price ?? 0;
    this.description = product?.description ?? "";
    this.image = product?.image ?? null;
  }
}

type TProdcutCreateReq = Omit<ProductDto, "id" | "image">;

export { ProductDto, type TProdcutCreateReq };
