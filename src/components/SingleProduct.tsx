import React from "react";
import { Product } from "../classes";

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({
  product,
}: SingleProductProps) => {
  return <div>{product.title}</div>;
};

export default SingleProduct;
