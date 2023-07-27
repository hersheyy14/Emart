import "./products.css";
import Card from "../card/Card";
import { useProductContext } from "../../context/productContext";

const Products = () => {
  const { products } = useProductContext();
  console.log(products);

  return (
    <div className="product-container">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Card product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
