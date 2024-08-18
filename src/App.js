import "./assets/css/day1.css";
import coffee from "./assets/media/caffee.jpg";
import products from "./products";
function App() {
  const productsDisplay = products.map((product) => {
    return (
      <div className="image1-container">
        <img src={product.image} alt={product.alt} className="image1" />
        <h2> {product.name}</h2>
        <p>{product.price}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <h1> Coffee and Beyond</h1>
      <p> where cookie maniac gathers </p>
      <img src={coffee} alt="coffee picture" className="imageDesign" />

      <div className="images-container">{productsDisplay} </div>
    </div>
  );
}

export default App;
