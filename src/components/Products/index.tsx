import Product from "./Product";
import { popularProducts } from "../../data";
import { ProductsContainer } from "./style";

const Products = () => {
  return (
    <ProductsContainer>
      {popularProducts?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;