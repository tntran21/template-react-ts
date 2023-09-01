import { ProductDto, TProdcutCreateReq } from "@/core/dto/productDto";
import API from "./axios.service";
import { IResponse } from "@/core/interfaces";

export const createProduct = async (payload: TProdcutCreateReq) => {
  const res = await API.post("/product", payload);

  return res;
};

export const getDetailProduct = async (id: string): Promise<IResponse<ProductDto>> => {
  const res = await API.get(`/product/${id}`);

  return res;
};

export const getProductsList = async (): Promise<IResponse<ProductDto[]>> => {
  const res = await API.get(`/product`);

  return res;
};

export const updateProduct = async (payload: ProductDto) => {
  const res = await API.put(`/product/${payload.id}`, payload);

  return res;
};
