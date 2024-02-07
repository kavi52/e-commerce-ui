import Product from "./Product";
import { popularProducts } from "../../data";
import { ProductsContainer } from "./style";
import { useParams } from "react-router-dom";
import { ProductsProps } from "./type";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({sort, filter}: ProductsProps) => {
  const { category } = useParams();

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async ()=>{
      try {
        const res = await axios.get("http://localhost:5002/api/products")
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [category])
  

  return (
    <ProductsContainer>
      {popularProducts?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;