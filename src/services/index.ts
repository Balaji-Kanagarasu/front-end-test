import { Product } from "@/common/interface";
import axios, { AxiosResponse } from "axios";

/**
 * Function responsible to fetch all product details.
 */
export const getProductDetails = async (): Promise<
  Product[] | [{ message: any }]
> => {
  try {
    const response: AxiosResponse<{ products: Product[] }, any> =
      await axios.get("https://dummyjson.com/products");
    return response?.data?.products;
  } catch (error: any) {
    return [{ message: error?.message }];
  }
};

/**
 * Function responsible to fetch product reviews by their Id.
 * @param productId
 */
export const fetchReviews = async (
  productId: number
): Promise<Product | { message: any } | undefined> => {
  try {
    if (productId) {
      const response: AxiosResponse<Product, any> = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return response?.data;
    }
  } catch (error: any) {
    return { message: error?.message };
  }
};
