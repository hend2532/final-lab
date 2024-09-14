import { useState } from "react";
import Card from "./Card";
import { products } from "./ProductData";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Products() {
  const [product, setProducts] = useState(products);
  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "Smart Watch",
      price: 1000,
      category: "Watch",
      img: "https://img.beatxp.com/prod/product/428/1st%20Image.webp",
    };
    setProducts([...product, newProduct]);
  };
  return (
    <>
    <Navbar/>
      <h2>Products</h2>
      <div className="products  mt-6 p-10 m-6 gap-4">
        {product.map((el) => {
          return <Card key={el.id} product={el} />;
        })}
      </div>
      <button className="add-btn" onClick={addProduct}>
        {" "}
        Add Product
      </button>
      <Footer/>
    </>
  );
}
export default Products;
