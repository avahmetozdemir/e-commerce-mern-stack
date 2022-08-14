

import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`;

const Products = () => {
  return (
    <>
    <h1>Popular Products</h1>
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
    
  );
};

export default Products;