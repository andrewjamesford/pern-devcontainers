import './App.css'
import ProductsList from './components/ProductsList'
import { useEffect, useState } from "react";
import { getProducts } from './api';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {

    const startFetching = async () => {
      setLoading(null);
      const result = await getProducts();
      if (!ignore) {
        setProducts(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      {loading && <div>Loading...</div>}
      {products && <ProductsList products={products} />}
    </>
  )
}

export default App
