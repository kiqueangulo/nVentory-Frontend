import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";
import { useProductContext } from "../../context/ProductContext";

function ProductDetails() {
  const navigate = useNavigate();
  const { exitDetails, setExitDetails } = useGeneralContext();
  const { productsCall, oneProduct, setOneProduct } = useProductContext();
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productsCall.getOneProduct(product_id);
      setOneProduct(data);
    };

    setTimeout(fetchProduct, 250);
  }, []);

  const resetOnLeave = () => {
    navigate(exitDetails);
    setOneProduct({});
    setExitDetails(-1);
  };

  return (
    <div className="bgBox">
      <button onClick={resetOnLeave}>⬅</button>
      <div className="container">
        <div className="outline">
          {!oneProduct.name ? (
            <h2>...Loading</h2>
          ) : (
            <p>
              Name: {oneProduct.name}
              <br />
              Brand: {oneProduct.brand}
              <br />
              Quantity: {oneProduct.quantity}
              <br />
              Price: {oneProduct.price}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          navigate(`/search/products/results/${oneProduct.product_id}/edit`);
          setExitDetails(exitDetails - 1);
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default ProductDetails;
